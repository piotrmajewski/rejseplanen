var Rejseplanen = (function () {
    const _urlPrefix = "https://www.rejseplanen.dk/webapp/index.html?language=da_DA#";
    const _urlSuffix = "!timeSel|depart!start|1";

    function _formatDate(aDate) {
        var month = (aDate.getMonth() + 1).toString();
        if (month.length == 1) {
            month = '0' + month;
        }
        var day = aDate.getDate().toString();
        if (day.length == 1) {
            day = '0' + day;
        }
        return day + "." + month + "." + aDate.getFullYear();
    }

    function _formatTime(aDate) {
        return aDate.toTimeString().slice(0,5);
    }

    return {
        planer : function() {
            var _now = new Date();
            var _date = new Date(_now);
            var _from = "";
            var _to = "";

            function _s() {
                return "!S|" + encodeURIComponent(_from);
            }
        
            function _z() {
                return "!Z|" + encodeURIComponent(_to);
            }
        
            function _d() {
                return "!date|" + _formatDate(_date);
            }
        
            function _t() {
                return "!time|" + _formatTime(_date);
            }

            return {
                from : function(from) {
                    _from = from;
                },
        
                to : function(to) {
                    _to = to;
                },
        
                now : function() {
                    _date = new Date(_now);
                },
        
                afterMinutes : function(minutes) {
                    _date.setMinutes(_now.getMinutes() + minutes);
                },
        
                search : function() {
                    var uri = _urlPrefix + _s() + _z() + _d() + _t() + _urlSuffix;
                    return uri;
                }
            };
        }
    };
})();
