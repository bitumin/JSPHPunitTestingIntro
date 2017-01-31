// Example of a basic node module export (this file is the "class"/module container)
// Works within node

var wrap = function (text, columns) {
    if (columns > text.length) {
        return text;
    }

    return text.substr(0, columns) + '\n' + wrap(text.substr(columns, text.length), columns);
};

exports.wrap = wrap;
