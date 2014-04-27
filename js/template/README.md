#JS模板引擎

##实现自动编译

	/**
	 * 编译模板
	 */
	JsTemplate.compile = function (templateStr) {
		var match, tmpl = templateStr,
			lastIdx = 0,
			funcStr = 'var $argName,$args = "",$html = "";',
			appendFuncStr = function (content, isHtml) {
				if (isHtml) {
					funcStr += ('$html+="' + content.replace(/"/img, '\\"') + '";\n')
				} else {
					if (content.indexOf('=') === 0) {
						funcStr += ('$html+=' + content.substring(1) + ';\n')
					} else {
						funcStr += (content.replace(/"/img, '\\"') + '\n');
					}
				}
			};
		if (JsTemplate.isDebug) {
			funcStr += 'debugger;'
		}
		funcStr += 'for($argName in this){$args+="var "+$argName+"=this[\'"+$argName+"\'];"} eval($args);'
		if (!tmpl) {
			return null;
		}
		tmpl = tmpl.replace(/[\r\n\t]/igm, ' ');
		while (match = LOGIC_REG.exec(tmpl)) {
			//debugger;
			var matchLength = match[0].length;
			var matchIndex = match.index;
			appendFuncStr(tmpl.substring(lastIdx === 0 ? 0 : lastIdx + 2, matchIndex), true);
			appendFuncStr(match[1], false);
			lastIdx = (matchIndex + matchLength);
		}
		appendFuncStr(tmpl.substring(lastIdx), true);
		appendFuncStr('return $html;', false);
		return new Function(funcStr);
	};