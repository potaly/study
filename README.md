DataReplaceAll
==============

JavaScript replace增强函数dataReplaceAll


	var demoData = {
		stringValue : "Hello, World I'm a String!",
		intValue : 5,
		funcValue : function() {
			return '[func:(' + this.stringValue + this.intValue + ')]'
		},
		textProcess : function(str) {
			if (str && str.length > this.intValue) {
				return str.substr(0, this.intValue) + '...'
			} else {
				return str;
			}
		}
	}
	var demoDataArray = [];
	for ( var i = 10; i--;) {
		demoDataArray.push(demoData);
	}

	function demo1() {
		var demo1 = document.getElementById("demo1");
		demo1.innerHTML = demo1.innerHTML.dataReplaceAll(demoData);
		demo1 = function(){alert('不要重复执行。')}
	}

	function demo2() {
		var demo2 = document.getElementById("demo2");
		demo2.innerHTML = demo2.innerHTML.dataReplaceAll(demoDataArray);
		demo2 = function(){alert('不要重复执行。')}
	}

	<h3>dataReplaceAll Object Demo</h3>

	Demo1:demo1();
	<input type="button" value="run" onclick="demo1();" />
	<div id="demo1">
		<ul>
			<li>index:${data.index}</li>
			<li>intValue(数字):${data.intValue}</li>
			<li>intValueAgain:${data.intValue + 1}</li>
			<li>stringValue(字符串):${data.stringValue}</li>
			<li>funcValue(函数):${data.funcValue()}</li>
			<li>expression(表达式):${data.textProcess('0123456789')}</li>
			<li>expression(表达式):${data.textProcess('0123')}</li>
		</ul>
	</div>

	<h3>dataReplaceAll Array Demo</h3>

	Demo2:demo2();
	<input type="button" value="run" onclick="demo2();" />
	<div id="demo2">
		<ul>
			<li>index:${data.index}</li>
			<li>intValue(数字):${data.intValue}</li>
			<li>intValueAgain:${data.intValue + 1}</li>
			<li>stringValue(字符串):${data.stringValue}</li>
			<li>funcValue(函数):${data.funcValue()}</li>
			<li>expression(表达式):${data.textProcess('0123456789')}</li>
			<li>expression(表达式):${data.textProcess('0123')}</li>
		</ul>
	</div>



