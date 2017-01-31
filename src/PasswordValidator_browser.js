// basic browser compatible js class/module

var Validator = (function () {
    return {
        hasUppercase: function hasUppercase(password) {
            return password !== password.toLowerCase();
        },
        hasLowercase: function hasLowercase(password) {
            return password !== password.toUpperCase();
        },
        hasUnderscore: function hasUnderscore(password) {
            return password.indexOf('_') > -1;
        },
        hasNumber: function hasNumber(password) {
            return /\d/.test(password);
        },
        isLongEnough: function isLongEnough(password) {
            return password.length > 6;
        },
        isValid: function isValid(password) {
            return this.hasUppercase(password)
                && this.hasLowercase(password)
                && this.hasUnderscore(password)
                && this.hasNumber(password)
                && this.isLongEnough(password);
        }
    }
})();
