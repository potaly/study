##node.js学习 

#简单Http Server

index.js:

	//index.js
	var http = require('http');
	var fs = require('fs');
	var url = require('url');
	var server = http.createServer();
	server.on('request', function (request, response) {
		//http://127.0.0.1:3420/wxApi.html?method=run&q=1&w=2&e=3
		response.setHeader('Content-Type', 'text/html');
		console.log('------' + new Date() + '------');
		console.log(request.method + ' ' + request.url + ' HTTP/' + request.httpVersion);
		for (var name in request.headers) {
			console.log(name + ':' + request.headers[name]);
		};
		var u = url.parse(request.url);
		//console.log(u);
		var requestProcess = function (err, data) {
			if (err) {
				response.statusCode = 404;
				response.end();
				return;
			}
			if (request.method === 'POST') {
				require("./postHandler.js").postHandler(request, function (data) {
					console.log('requestBody:' + data);
					response.write(data);
					response.end();
				});
			} else {
				response.write(data);
				response.end();
			}
			console.log('------' + new Date() + '------\r\n');
		};
		var path = u.pathname;
		if (path === '/') {
			path = '/index.html';
		}
		fs.readFile('./html' + path, function (err, data) {
			if (err) {
				console.log(err);
				requestProcess(err, null);
			} else {
				requestProcess(err, data.toString());
			}
		});
		//JSON.stringify
	});
	server.listen(3420);
	console.log('server start... port:3420')
	
postHandler.js

	//postHandler.js
	var postHandler = function (request, callback) {
		if (request.method === 'POST') {
			var data = '';
			request.on('data', function (d) {
				data += d;
			});
			request.on('end', function () {
				callback(data);
			});
		}
	};
	exports.postHandler = postHandler;