

const isEven = function (value) {
    if (value % 2 === 0) {
        return true;
    }
    return false;
};

module.exports.even = function () {
    return this.filter(function (arrayElement) {
        if (isEven(arrayElement)) {
            return arrayElement;
        }
    });
}

module.exports.odd = function () {
    return this.filter(function (arrayElement) {
        if (!isEven(arrayElement)) {
            return arrayElement;
        }
    });
}