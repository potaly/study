(function($, undefined) {
  /**
   * String replace加强版
   * @author yuanhongbo 
   * @createDate 2014-01-01
   */
	var data, replaceCore = function(matchStr, matchVal) {
		try {
			return eval(matchVal);
		} catch (e) {
			return matchStr;
		}
	}, dataTemplate = function(templateStr, opt) {
		if (!templateStr || !opt) {
			return templateStr;
		}
		var datas, html = [];
		if (opt instanceof Array) {
			datas = opt;
		} else {
			datas = [], datas.push(opt);
		}
		for (var i = 0, l = datas.length; i < l; i++) {
			data = datas[i];
			data.index = i;
			html.push(templateStr.replace(/\${([^}]+)}/igm, replaceCore));
		}
		return html.join('');
	};
	$.dataReplaceAll = function(opt) {
		return dataTemplate(this, opt);
	};
})(String.prototype);
