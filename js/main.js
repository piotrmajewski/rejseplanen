var Planer = (function () {
    var _now = new Date();
    var _date = new Date(_now);

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
        now : function() {
            _date = new Date(_now);
        },

        afterMinutes : function(minutes) {
            _date.setMinutes(_now.getMinutes() + minutes);
        }
    };
})();
