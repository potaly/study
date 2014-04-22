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