// Task 243(b): There is a natural number 'n'.
// Can it be represented as the sum of two squares of natural numbers?
// If possible, then indicate all pairs of 'x', 'y' such natural numbers, that 'n = x^2 + y^2', 'x >= y';
const getSqrtOfNum = require('../tasks/243_a').getSqrtOfNum;

function allSumsOfSquares(n) {
    const sqrtOfNum = getSqrtOfNum(n);
    let res = [];
    if (sqrtOfNum) {
        for (let x = 1; x <= sqrtOfNum; x++) {
            for (let y = 1; y <= sqrtOfNum; y++) {
                if (Math.trunc(n) == x ** 2 + y ** 2 && x >= y) {
                    res.push(`x = ${x} & y = ${y}`);
                }
            }
        }
    } else {
        return '"n" should be greater than 1';
    }
    return res.length > 0 ? res : 'No pairs';
}

module.exports = allSumsOfSquares;



