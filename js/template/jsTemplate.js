(function () {
	'use strict';
	/**
	 * js模板引擎
	 */
	function JsTemplate(templateId, templateContent) {
		if (!templateId) {
			throw 'argument error.';
		}
		if (!(this instanceof JsTemplate)) {
			return new JsTemplate(templateId, templateContent);
		}
		this.template = JsTemplate.templateCache[templateId];
		if (!this.template) {
			if (templateContent) {
				this.template = JsTemplate.compile(templateContent);
				JsTemplate.templateCache[templateId] = this.template;
			} else {
				throw 'template error.';
			}
		}
	}
	// 是否启用调试
	JsTemplate.isDebug = false;
	// 逻辑语法规则
	JsTemplate.ANALYZE = /<%([^%>]+)%>/img;
	//编译后模板缓存
	JsTemplate.templateCache = {};
	//合并属性
	JsTemplate.mix = function (target, source) {
		var key;
		for (key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key];
			}
		}
		return target;
	};
	/**
	 * 编译模板
	 */
	JsTemplate.compile = function (templateStr) {
		var match, lastIdx = 0,
			tmpl = templateStr,
			funcStr = 'var $argName,$args = "",$html = "";',
			appendFuncStr = function (content, isHtml) {
				if (isHtml) {
					funcStr += ('$html+="' + content.replace(/"/img, '\\"') + '";\n');
				} else {
					if (content.indexOf('=') === 0) {
						funcStr += ('$html+=' + content.substring(1) + ';\n');
					} else {
						funcStr += (content.replace(/"/img, '\\"') + '\n');
					}
				}
			};
		if (JsTemplate.isDebug) {
			funcStr += 'debugger;';
		}
		funcStr += 'var $this = this;for($argName in $this){$args+="var "+$argName+"=$this[\'"+$argName+"\'];"} eval($args);';
		funcStr += 'var include = function(id,includeData){return JsTemplate(id).render(JsTemplate.mix($this,includeData));};';
		if (!tmpl) {
			return null;
		}
		tmpl = tmpl.replace(/[\r\n\t]/img, ' ');
		while (match = JsTemplate.ANALYZE.exec(tmpl)) {
			appendFuncStr(tmpl.substring(lastIdx === 0 ? 0 : lastIdx, match.index), true);
			appendFuncStr(match[1], false);
			lastIdx = (match.index + match[0].length);
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