// Task 243(a): There is a natural number 'n'.
// Can it be represented as the sum of two squares of natural numbers?
// If possible, then indicate a pair of 'x', 'y' such natural numbers, that 'n = x^2 + y^2';

function firstSumOfSquares(n) {
    const sqrtOfNum = getSqrtOfNum(n);
    if (sqrtOfNum) {
        for (let x = 1; x <= sqrtOfNum; x++) {
            for (let y = 1; y <= sqrtOfNum; y++) {
                if (Math.trunc(n) == x ** 2 + y ** 2) {
                    return `x: ${x}, y: ${y}`;
                }
            }
        }
        return 'No pairs';
    } else {
        return '"n" should be greater than 1';
    }
}

const getSqrtOfNum = num => num > 1 ? Math.trunc(Math.sqrt(num)) : 0;

const myModule = module.exports = firstSumOfSquares;
myModule.getSqrtOfNum = getSqrtOfNum;
