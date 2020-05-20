'use strict';

//'Given a natural number n. Find out if the number 3 is included in the notation n².';

const OPTIONS = {
    TO_POW: 2,
    TO_INCLUDE: '3'
};

const pow = (n, toPow) => Math.pow(n, toPow);
const isIncludes = (n) => n.toString().includes(OPTIONS.TO_INCLUDE);

const initTask_88a = (n) => {
    const powN = pow(n, OPTIONS.TO_POW);
    return isIncludes(powN) ? `n² includes ${OPTIONS.TO_INCLUDE}` : `n² missed ${OPTIONS.TO_INCLUDE}`
};

module.exports = initTask_88a;
