##正则表达式的贪婪与懒惰模式

###语法及说明
<table cellspacing="0">
	<thead>
		<tr>
			<th scope="col">代码/语法</th>
			<th scope="col">说明</th>

		</tr>
	</thead>
	<tbody>
		<tr>
			<td><span class="code">*?</span></td>
			<td><span class="desc">重复任意次，但尽可能少重复</span></td>
		</tr>
		<tr>

			<td><span class="code">+?</span></td>
			<td><span class="desc">重复1次或更多次，但尽可能少重复</span></td>
		</tr>
		<tr>
			<td><span class="code">??</span></td>
			<td><span class="desc">重复0次或1次，但尽可能少重复</span></td>
		</tr>

		<tr>
			<td><span class="code">{n,m}?</span></td>
			<td><span class="desc">重复n到m次，但尽可能少重复</span></td>
		</tr>
		<tr>
			<td><span class="code">{n,}?</span></td>
			<td><span class="desc">重复n次以上，但尽可能少重复</span></td>

		</tr>
	</tbody>
</table>


###贪婪匹配
正则表达式默认行为是匹配尽可能多的字符。

例如表达式：a.*b

它将会匹配最长的以a开始，以b结束的字符串。如果用它来搜索aabab的话，它会匹配整个字符串aabab。


###懒惰匹配

懒惰模式仅需讲表达式改为：例如表达式：a.*?b

a.*?b匹配最短的，以a开始，以b结束的字符串。如果把它应用于aabab的话，它会匹配aab（第一到第三个字符）和ab（第四到第五个字符）。