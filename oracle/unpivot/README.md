##oracle 列转行

	select * from test_unpivot;
	--name  Chinese Math
	--李四  79      98
	--张三  91      89

##union all 列转行

	select name, 'Chinese' type, chinese score
	  from test_unpivot
	union all
	select name, 'Math' type, math score from test_unpivot;

##unpivot列转行

	select *
	  from test_unpivot 
	  unpivotinclude nulls 
	  unpivot(
		score 
		for type 
		in(chinese,math)
	  );

 
参考文档：http://blog.csdn.net/tianlesoftware/article/details/7060306