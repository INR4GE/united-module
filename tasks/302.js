'use strict';

//'Given a natural number n. How many different digits are in it decimal notation';

const takeUnique = (n) => new Set(n.toString().split(''));

const initTask_302 = (n) => {
    const result = takeUnique(n);
    return `${n} => ${result.size} unique digit(s)`
};

module.exports = initTask_302;
