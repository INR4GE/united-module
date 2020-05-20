'use strict';

//'Given a natural number n. Change the order of the digits of the number n to the reverse'.

const reverse = (n) => n.toString().split('').reverse().join('');

const initTask_88b = (n) => {
    const result = reverse(n);
    return `${n} => ${result}`;
};

module.exports = initTask_88b;
