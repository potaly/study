#JavaScript继承

###JavaScript利用prototype实现继承

	//定义接口
	function Interface() {}
	Interface.prototype = {
		methodOne: function () {
			throw 'not implement.';
		},
		methodTwo: function () {
			throw 'not implement.';
		}
	}
	//实现methodOne
	function InterfaceImplmethodOne() {}
	InterfaceImplmethodOne.prototype = new Interface();
	InterfaceImplmethodOne.prototype.methodOne = function () {
		console.log('InterfaceImplmethodOne.methodOne');
	}

	//实现methodTwo
	function InterfaceImplmethodTwo() {}
	InterfaceImplmethodTwo.prototype = new Interface();
	InterfaceImplmethodTwo.prototype.methodTwo = function () {
		console.log('InterfaceImplmethodTwo.methodTwo');
	}

	var i = new InterfaceImplmethodOne();
	console.log('i instanceof Interface:', i instanceof Interface); //true
	console.log('i instanceof InterfaceImplmethodOne:', i instanceof InterfaceImplmethodOne); //true
	console.log('i instanceof InterfaceImplmethodTwo:', i instanceof InterfaceImplmethodTwo); //false

	debugger;
	i.methodOne();
	i.methodTwo(); //error.

###未完待续...