##关于Promise的理解

理解Promise最重要的一点就是弄清楚javascript中异步函数执行机制和时间

javascript是单线程执行环境，所有的异步方法/函数调用后都只是加入到事件队列，等待同步方法执行完成后才有机会触发。

##定义Promise对象

	//定义Promise对象
	var Promise = function () {};

	//定义Promise常用接口
	//FIXME 正常的函数需要支持链式回调或嵌套调用
	Promise.prototype = {
		then: function (success, fail) {
			//FIXME 1.正式版成功或失败函数应该为回调列表
			//FIXME 2.判断是promise否已经返回，已经返回则立即执行回调
			this.success = success;
			this.fail = fail;
		},
		resolve: function (result) {
			return this.success && this.success(result);
		},
		reject: function (error) {
			return this.fail && this.fail(error);
		}
	};
	
	
##定义两个基于Promise的异步函数

	function asyncTest1(){
		var p = new Promise();
		setTimeout(function(){
			console.log("task1 run;",new Date());
			p.resolve('asyncTest1');
		},3000);
		return p;
	}

	function asyncTest2(task1Val){
		var p = new Promise();
		setTimeout(function(){
		console.log(task1Val);
		console.log("task2 run;",new Date());
		p.resolve('asyncTest2');
		},3000);
		return p;
	}
		
##使用Promise执行异步回调
			
	asyncTest1().then(asyncTest2);