// basic browser compatible js class/module

var LineWrapper = (function () {
    return {
        wrap: function (text, columns) {
            if (columns > text.length) {
                return text;
            }

            return text.substr(0, columns) + '\n' + this.wrap(text.substr(columns, text.length), columns);
        }
    }
})();
