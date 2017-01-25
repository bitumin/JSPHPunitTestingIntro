// Example of a basic node module export (this file is the "class"/module container)
// Works within node

exports.hasUppercase = function (password) {
    return password !== password.toLowerCase();
};

exports.hasLowercase = function (password) {
    return password !== password.toUpperCase();
};

exports.hasUnderscore = function (password) {
    return password.indexOf('_') > -1;
};

exports.hasNumber = function (password) {
    return /\d/.test(password);
};

exports.isLongEnough = function (password) {
    return password.length > 6;
};

exports.isValid = function (password) {
    return this.hasUppercase(password)
        && this.hasLowercase(password)
        && this.hasUnderscore(password)
        && this.hasNumber(password)
        && this.isLongEnough(password);
};
