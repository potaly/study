(function () {
	'use strict';
	//编译后模板缓存
	var templateCache = {},

		// 逻辑语法规则
		LOGIC_REG = /<%([^%>]+)%>/igm;
	/**
	 * js模板引擎
	 */
	function JsTemplate(templateId, templateContent) {
		//debugger;
		if (!templateId) {
			throw 'argument error.';
		}
		if (!(this instanceof JsTemplate)) {
			return new JsTemplate(templateId, templateContent);
		}
		this.template = templateCache[templateId];
		if (!this.template) {
			if (templateContent) {
				this.template = JsTemplate.compile(templateContent);
				templateCache[templateId] = this.template;
			} else if (typeof document !== 'undefined') {
				var tmpl = document.getElementById(templateId);
				if (tmpl) {
					this.template = JsTemplate.compile(tmpl.innerHTML || tmpl.value);
					templateCache[templateId] = this.template;
				}
			}
		}
	}
	// 是否启用调试
	JsTemplate.isDebug = false;
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
	// 对象方法
	JsTemplate.prototype = {
		render: function (data) {
			if (this.template) {
				return this.template.call(data);
			}
		}
	};
	// 导出函数
	window.JsTemplate = JsTemplate;
}());