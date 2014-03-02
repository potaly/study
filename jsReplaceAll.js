(function (win, undefined) {
    'use strict';
    /**
     * String replace加强版
     * @author yuanhongbo
     * @createDate 2014-01-01
     */
    var i, l, jQuick, data, replaceCore = function (matchStr, matchVal) {
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
    if (win.jQuick === undefined) {
        jQuick = win.jQuick = {};
    } else {
        jQuick = win.jQuick;
    }
    jQuick.replaceAll = function (str, opt) {
        return dataTemplate(str, opt);
    };
})(window);