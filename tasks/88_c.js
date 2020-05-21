'use strict';

function swap(num) {
    let arrNum = num.toString().split('');
    arrNum[0] = arrNum.splice(arrNum.length - 1, 1, arrNum[0]);
    let result = Number(arrNum.join(''));
    return result;
};

module.exports = swap;