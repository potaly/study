##Oracle查找锁定对象以及强制解除锁定的方法

	--查找锁定对象
	SELECT /*+ rule */   
	  lpad(' ', decode(l.xidusn, 0, 3, 0)) || l.oracle_username User_name,   
	  o.owner,   
	  o.object_name,   
	  o.object_type,   
	  s.sid,   
	  s.serial#   
	FROM 
	  v$locked_object l, dba_objects o, v$session s   
	WHERE 
	  l.object_id = o.object_id AND
	  l.session_id = s.sid   
	ORDER BY 
	  o.object_id, xidusn DESC; 

	--关掉连接的session
	alter system kill session '142,4'; --此处参数为：s.sid,  s.serial#
