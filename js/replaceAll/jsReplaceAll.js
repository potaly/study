(function (win, undefined) {
	'use strict';
	var i, l, data, replaceCore = function (matchStr, matchVal) {
			var ret = null;
			try {
				ret = eval(matchVal);
			} catch (e) {
				ret = matchStr;
			}
			return ret;
		}, dataTemplate = function (templateStr, opt) {
			if (!templateStr || !opt) {
				return templateStr;
			}
			var datas, html = [];
			if (opt instanceof Array) {
				datas = opt;
			} else {
				datas = [];
				datas.push(opt);
			}
			for (i = 0, l = datas.length; i < l; i++) {
				data = datas[i];
				data.index = i;
				html.push(templateStr.replace(/\${([^}]+)}/igm, replaceCore));
			}
			return html.join('');
		};
	if (win.replaceAll === undefined) {
		win.replaceAll = dataTemplate
	};
})(window);