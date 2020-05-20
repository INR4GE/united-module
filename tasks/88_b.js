'use strict';

//'Given a natural number n. Change the order of the digits of the number n to the reverse'.

const reverse = (n) => n && n.toString().split('').reverse().join('');

module.exports = reverse;
