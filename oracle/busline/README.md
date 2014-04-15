#公交换乘SQL

###三个表
（最简单化，不考虑模糊查询，单行线等其他东西）： 
 
1，站点表stop(stop_id,stop_name)  

2，路线表line(line_id,line_name)  

3，路线站点表(点线路关系表)linestops( line_id, stop_id, seq )此处的seq指某站点在某线路中的顺序。   
  
###现在分析算法：  
1，直达线路  

首先根据两个站点名获取两个站点各自的id，这里定义为id1,id2  

然后查询  

	select line_id from  
	(select line_id from linestops where stop_id = id1) A,  
	(select line_id from linestops where stop_id = id2) B  
	where A.line_id = B.line_id  

即得到可直达的线路列表  

2,一次换乘  

首先根据两个站点名获取两个站点各自的id，这里定义为id1,id2  

然后搜寻两个站点通过直达方式各自能够到达的站点集合，最后他们的交集就是我们所需要的换乘站点。  

	select stop_id from  
	(  
	select distinct stop_id from linestops where line_id in  
	(select line_id from linestops where stop_id = id1)  
	)A,  
	(  
	select distinct stop_id from linestops where line_id in  
	(select line_id from linestops where stop_id = id1)  
	)B  
	where A.stop_id= B.stop_id  

得到换乘站（可能有多个或0个）后，剩下的就是显示能够到达换乘站的两边线路，这通过前面的直达查询即可。  
