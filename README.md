DataReplaceAll
==============

JavaScript replace增强函数dataReplaceAll


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Demos</title>
<style type="text/css">
body {
	font-family: "微软雅黑";
	font-size: 12px;
}

#demo1 li,#demo2 li {
	float: left;
	width: 50%;
}

h3 {
	margin-top: 50px;
	clear: both;
}
</style>
<script type="text/javascript">
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
</script>
<script src="dataReplaceAll.js" type="text/javascript"></script>
</head>
<body>
	<h3>dataReplaceAll Object Demo</h3>

	Demo1:
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

	Demo2:
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

</body>
</html>

