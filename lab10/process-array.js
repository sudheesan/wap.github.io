

const isEven = function (value) {
    if (value % 2 === 0) {
        return true;
    }
    return false;
};

module.exports.even = function (array) {
    return array.filter(function (arrayElement) {
        if (isEven(arrayElement)) {
            return arrayElement;
        }
    });
}

module.exports.odd = function (array) {
    return array.filter(function (arrayElement) {
        if (!isEven(arrayElement)) {
            return arrayElement;
        }
    });
}