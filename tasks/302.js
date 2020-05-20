'use strict';

//'Given a natural number n. How many different digits are in it decimal notation';

const unique = (n) => {
    const result = new Set(n.toString().split(''));
    return `${n} => ${result.size} unique digit(s)`
};

module.exports = unique;
