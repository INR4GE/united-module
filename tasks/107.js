//Task 107: There is an integer m> 1. Get the largest integer k at which 4^k < m.

function maxIntPow(m) {
    m = checkNum(m);
    if (m) {
        let res = 'Too small number';
        for (let k = 1; 4 ** k < m; k++) res = k;
        return res;
    } else return 'm should be greater than 1';
}

const checkNum = num => num > 1 ? Math.round(num) : 0;

const myModule = module.exports = maxIntPow;
myModule.checkNum = checkNum;
