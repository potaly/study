##oracle 行转列

	select t.* from TEST_PIVOT t;
	--name  type  score
	--张三  语文  91
	--张三  数学  89
	--李四  语文  79
	--李四  数学  98

##使用decode+group实现行转列

	select name,
		   max(decode(type, '语文', score, null)) as Chinese,
		   max(decode(type, '数学', score, null)) as math
	  from test_pivot
	 group by name;

##使用pivot实现行转列

	select *
	  from (select name, type, score from test_pivot) 
	 pivot(max(score) 
		   for type 
		   in('语文' as Chinese,'数学' as math)
	 );

 
参考文档：http://blog.csdn.net/tianlesoftware/article/details/7060306