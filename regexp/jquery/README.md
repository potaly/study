##jQuery中的正则表达式

###rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g 

作用：匹配前后空白字符

重点：分支|

	\s：匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。


	\uFEFF：BOM，全称是Byte Order Mark，它是一个Unicode字符，通常出现在文本的开头，用来标识字节序 （Big/Little Endian），除此以外还可以标识编码（UTF-8/16/32），如果出现在文本中间，则解释为zero width no-break space。


	\xA0：NBSP Non-Breaking SPace.




###rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/ 

作用：匹配html标签或元素id

重点：非捕获匹配(?:pattern)、或|


将表达式拆成两部分：

	(?:pattern ) //匹配 pattern 但不捕获该匹配的子表达式，即它是一个非捕获匹配，不存储供以后使用的匹配。这对于用“or”字符 (|) 组合模式部件的情况很有用。例如，'industr(?:y|ies) 是比 'industry|industries' 更经济的表达式。

	pattern : \s*(<[\w\W]+>)[^>]*|#([\w-]*)



再将pattern 拆成两部分：

	\s*(<[\w\W]+>)[^>]* //匹配html标签

	#([\w-]*) //匹配#id
	

###rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/)  

作用：匹配单一标签

重点：非捕获匹配(?:pattern)、后向匹配\1、或|


