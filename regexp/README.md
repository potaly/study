#正则表达式 

##相关文档
[正则表达式介绍](http://msdn.microsoft.com/zh-cn/library/28hw3sce\(v=vs.80\).aspx)

[正则表达式语法](http://msdn.microsoft.com/zh-cn/library/ae5bf541\(v=vs.80\).aspx)

[jquery中的正则表达式](https://github.com/hbyuan/study/tree/master/regexp/jquery)

[正则表达式的贪婪与懒惰模式](https://github.com/hbyuan/study/tree/master/regexp/greedyandlazy)

[正则表达式零宽断言](https://github.com/hbyuan/study/tree/master/regexp/zerowithassert)

##表达式全集

<table border="1px">
	<tbody>
		<tr>
			<th>字符</th>
			<th>描述</th>
		</tr>
		<tr>
			<th style="text-align:center;">\</th>
			<td>将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“
				<code>n</code>”匹配字符“
				<code>n</code>”。“
				<code>\n</code>”匹配一个换行符。串行“
				<code>\\</code>”匹配“
				<code>\</code>”而“
				<code>\(</code>”则匹配“
				<code>(</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">^</th>
			<td>匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“
				<code>\n</code>”或“
				<code>\r</code>”之后的位置。</td>
		</tr>
		<tr>
			<th style="text-align:center;">$</th>
			<td>匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“
				<code>\n</code>”或“
				<code>\r</code>”之前的位置。</td>
		</tr>
		<tr>
			<th style="text-align:center;">*</th>
			<td>匹配前面的子表达式零次或多次。例如，zo*能匹配“
				<code>z</code>”、“
				<code>zo</code>”以及“
				<code>zoo</code>”。*等价于{0,}。</td>
		</tr>
		<tr>
			<th style="text-align:center;">+</th>
			<td>匹配前面的子表达式一次或多次。例如，“
				<code>zo+</code>”能匹配“
				<code>zo</code>”以及“
				<code>zoo</code>”，但不能匹配“
				<code>z</code>”。+等价于{1,}。</td>
		</tr>
		<tr>
			<th style="text-align:center;">?</th>
			<td>匹配前面的子表达式零次或一次。例如，“
				<code>do(es)?</code>”可以匹配“
				<code>do</code>”或“
				<code>does</code>”中的“
				<code>do</code>”。?等价于{0,1}。</td>
		</tr>
		<tr>
			<th style="text-align:center;">{
				<span style="font-family:Times New Roman; font-style:italic;">n</span>}</th>
			<td>
				<span style="font-family:Times New Roman; font-style:italic;">n</span>是一个非负整数。匹配确定的
				<span style="font-family:Times New Roman; font-style:italic;">n</span>次。例如，“
				<code>o{2}</code>”不能匹配“
				<code>Bob</code>”中的“
				<code>o</code>”，但是能匹配“
				<code>food</code>”中的两个o。</td>
		</tr>
		<tr>
			<th style="text-align:center;">{
				<span style="font-family:Times New Roman; font-style:italic;">n</span>,}</th>
			<td>
				<span style="font-family:Times New Roman; font-style:italic;">n</span>是一个非负整数。至少匹配
				<span style="font-family:Times New Roman; font-style:italic;">n</span>次。例如，“
				<code>o{2,}</code>”不能匹配“
				<code>Bob</code>”中的“
				<code>o</code>”，但能匹配“
				<code>foooood</code>”中的所有o。“
				<code>o{1,}</code>”等价于“
				<code>o+</code>”。“
				<code>o{0,}</code>”则等价于“
				<code>o*</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">{
				<span style="font-family:Times New Roman; font-style:italic;">n</span>,
				<span style="font-family:Times New Roman; font-style:italic;">m</span>}</th>
			<td>
				<span style="font-family:Times New Roman; font-style:italic;">m</span>和
				<span style="font-family:Times New Roman; font-style:italic;">n</span>均为非负整数，其中
				<span style="font-family:Times New Roman; font-style:italic;">n</span>&lt;=
				<span style="font-family:Times New Roman; font-style:italic;">m</span>。最少匹配
				<span style="font-family:Times New Roman; font-style:italic;">n</span>次且最多匹配
				<span style="font-family:Times New Roman; font-style:italic;">m</span>次。例如，“
				<code>o{1,3}</code>”将匹配“
				<code>fooooood</code>”中的前三个o。“
				<code>o{0,1}</code>”等价于“
				<code>o?</code>”。请注意在逗号和两个数之间不能有空格。</td>
		</tr>
		<tr>
			<th style="text-align:center;">?</th>
			<td>当该字符紧跟在任何一个其他限制符（*,+,?，{
				<span style="font-family:Times New Roman; font-style:italic;">n</span>}，{
				<span style="font-family:Times New Roman; font-style:italic;">n</span>,}，{
				<span style="font-family:Times New Roman; font-style:italic;">n</span>,
				<span style="font-family:Times New Roman; font-style:italic;">m</span>}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“
				<code>oooo</code>”，“
				<code>o+?</code>”将匹配单个“
				<code>o</code>”，而“
				<code>o+</code>”将匹配所有“
				<code>o</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">.</th>
			<td>匹配除“
				<code>\</code>
				<span style="font-family:Times New Roman; font-style:italic;">
					<code>n</code>
				</span>”之外的任何单个字符。要匹配包括“
				<code>\</code>
				<span style="font-family:Times New Roman; font-style:italic;">
					<code>n</code>
				</span>”在内的任何字符，请使用像“
				<code>(.|\n)</code>”的模式。</td>
		</tr>
		<tr>
			<th style="text-align:center;">(pattern)</th>
			<td>匹配pattern并获取这一匹配的子字符串。该子字符串用于向后引用。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“
				<code>\(</code>”或“
				<code>\)</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">(?:pattern)</th>
			<td>匹配pattern但不获取匹配的子字符串，也就是说这是一个非获取匹配，不存储匹配的子字符串用于向后引用。这在使用或字符“
				<code>(|)</code>”来组合一个模式的各个部分是很有用。例如“
				<code>industr(?:y|ies)</code>”就是一个比“
				<code>industry|industries</code>”更简略的表达式。</td>
		</tr>
		<tr>
			<th style="text-align:center;">(?=pattern)</th>
			<td>正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“
				<code>Windows(?=95|98|NT|2000)</code>”能匹配“
				<code>Windows2000</code>”中的“
				<code>Windows</code>”，但不能匹配“
				<code>Windows3.1</code>”中的“
				<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。</td>
		</tr>
		<tr>
			<th style="text-align:center;">(?!pattern)</th>
			<td>正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“
				<code>Windows(?!95|98|NT|2000)</code>”能匹配“
				<code>Windows3.1</code>”中的“
				<code>Windows</code>”，但不能匹配“
				<code>Windows2000</code>”中的“
				<code>Windows</code>”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始</td>
		</tr>
		<tr>
			<th style="text-align:center;">(?&lt;=pattern)</th>
			<td>反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“
				<code>(?&lt;=95|98|NT|2000)Windows</code>”能匹配“
				<code>2000Windows</code>”中的“
				<code>Windows</code>”，但不能匹配“
				<code>3.1Windows</code>”中的“
				<code>Windows</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">(?&lt;!pattern)</th>
			<td>反向否定预查，与正向否定预查类似，只是方向相反。例如“
				<code>(?&lt;!95|98|NT|2000)Windows</code>”能匹配“
				<code>3.1Windows</code>”中的“
				<code>Windows</code>”，但不能匹配“
				<code>2000Windows</code>”中的“
				<code>Windows</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">x|y</th>
			<td>匹配x或y。例如，“
				<code>z|food</code>”能匹配“
				<code>z</code>”或“
				<code>food</code>”。“
				<code>(z|f)ood</code>”则匹配“
				<code>zood</code>”或“
				<code>food</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">[xyz]</th>
			<td>字符集合（character class）。匹配所包含的任意一个字符。例如，“
				<code>[abc]</code>”可以匹配“
				<code>plain</code>”中的“
				<code>a</code>”。特殊字符仅有反斜线\保持特殊含义，用于转义字符。其它特殊字符如星号、加号、各种括号等均作为普通字符。脱字符^如果出现在首位则表示负值字符集合；如果出现在字符串中间就仅作为普通字符。连字符 - 如果出现在字符串中间表示字符范围描述；如果如果出现在首位则仅作为普通字符。</td>
		</tr>
		<tr>
			<th style="text-align:center;">[^xyz]</th>
			<td>排除型（negate）字符集合。匹配未列出的任意字符。例如，“
				<code>[^abc]</code>”可以匹配“
				<code>plain</code>”中的“
				<code>plin</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">[a-z]</th>
			<td>字符范围。匹配指定范围内的任意字符。例如，“
				<code>[a-z]</code>”可以匹配“
				<code>a</code>”到“
				<code>z</code>”范围内的任意小写字母字符。</td>
		</tr>
		<tr>
			<th style="text-align:center;">[^a-z]</th>
			<td>排除型的字符范围。匹配任何不在指定范围内的任意字符。例如，“
				<code>[^a-z]</code>”可以匹配任何不在“
				<code>a</code>”到“
				<code>z</code>”范围内的任意字符。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\b</th>
			<td>匹配一个单词边界，也就是指单词和空格间的位置。例如，“
				<code>er\b</code>”可以匹配“
				<code>never</code>”中的“
				<code>er</code>”，但不能匹配“
				<code>verb</code>”中的“
				<code>er</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\B</th>
			<td>匹配非单词边界。“
				<code>er\B</code>”能匹配“
				<code>verb</code>”中的“
				<code>er</code>”，但不能匹配“
				<code>never</code>”中的“
				<code>er</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\cx</th>
			<td>匹配由x指明的控制字符。例如，\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“
				<code>c</code>”字符。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\d</th>
			<td>匹配一个数字字符。等价于[0-9]。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\D</th>
			<td>匹配一个非数字字符。等价于[^0-9]。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\f</th>
			<td>匹配一个换页符。等价于\x0c和\cL。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\n</th>
			<td>匹配一个换行符。等价于\x0a和\cJ。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\r</th>
			<td>匹配一个回车符。等价于\x0d和\cM。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\s</th>
			<td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\S</th>
			<td>匹配任何非空白字符。等价于[^ \f\n\r\t\v]。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\t</th>
			<td>匹配一个制表符。等价于\x09和\cI。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\v</th>
			<td>匹配一个垂直制表符。等价于\x0b和\cK。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\w</th>
			<td>匹配包括下划线的任何单词字符。等价于“
				<code>[A-Za-z0-9_]</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\W</th>
			<td>匹配任何非单词字符。等价于“
				<code>[^A-Za-z0-9_]</code>”。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\x
				<span style="font-family:Times New Roman; font-style:italic;">n</span>
			</th>
			<td>匹配
				<span style="font-family:Times New Roman; font-style:italic;">n</span>，其中
				<span style="font-family:Times New Roman; font-style:italic;">n</span>为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“
				<code>\x41</code>”匹配“
				<code>A</code>”。“
				<code>\x041</code>”则等价于“
				<code>\x04&amp;1</code>”。正则表达式中可以使用ASCII编码。.</td>
		</tr>
		<tr>
			<th style="text-align:center;">\
				<span style="font-family:Times New Roman; font-style:italic;">num</span>
			</th>
			<td>向后引用（back-reference）一个子字符串（substring），该子字符串与正则表达式的第num个用括号围起来的子表达式（subexpression）匹配。其中num是从1开始的正整数，其上限可能是99。例如：“
				<code>(.)\1</code>”匹配两个连续的相同字符。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\
				<span style="font-family:Times New Roman; font-style:italic;">n</span>
			</th>
			<td>标识一个八进制转义值或一个向后引用。如果\
				<span style="font-family:Times New Roman; font-style:italic;">n</span>之前至少
				<span style="font-family:Times New Roman; font-style:italic;">n</span>个获取的子表达式，则
				<span style="font-family:Times New Roman; font-style:italic;">n</span>为向后引用。否则，如果
				<span style="font-family:Times New Roman; font-style:italic;">n</span>为八进制数字（0-7），则
				<span style="font-family:Times New Roman; font-style:italic;">n</span>为一个八进制转义值。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>
			</th>
			<td>标识一个八进制转义值或一个向后引用。如果\
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>之前至少有
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>个获得子表达式，则
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>为向后引用。如果\
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>之前至少有
				<span style="font-family:Times New Roman; font-style:italic;">n</span>个获取，则
				<span style="font-family:Times New Roman; font-style:italic;">n</span>为一个后跟文字
				<span style="font-family:Times New Roman; font-style:italic;">m</span>的向后引用。如果前面的条件都不满足，若
				<span style="font-family:Times New Roman; font-style:italic;">n</span>和
				<span style="font-family:Times New Roman; font-style:italic;">m</span>均为八进制数字（0-7），则\
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>将匹配八进制转义值
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\
				<span style="font-family:Times New Roman; font-style:italic;">nml</span>
			</th>
			<td>如果
				<span style="font-family:Times New Roman; font-style:italic;">n</span>为八进制数字（0-3），且
				<span style="font-family:Times New Roman; font-style:italic;">m和l</span>均为八进制数字（0-7），则匹配八进制转义值
				<span style="font-family:Times New Roman; font-style:italic;">nm</span>l。</td>
		</tr>
		<tr>
			<th style="text-align:center;">\u
				<span style="font-family:Times New Roman; font-style:italic;">n</span>
			</th>
			<td>匹配
				<span style="font-family:Times New Roman; font-style:italic;">n</span>，其中
				<span style="font-family:Times New Roman; font-style:italic;">n</span>是一个用四个十六进制数字表示的Unicode字符。例如，\u00A9匹配版权符号（©）。</td>
		</tr>
	</tbody>
</table>

