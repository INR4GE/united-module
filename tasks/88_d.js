'use strict';

function add1(num) {
    let numArr = num.toString().split('');
    numArr.push('1');
    numArr.unshift('1');
    let result = Number(numArr.join(''));
    return result;
}

module.exports = add1;