'use strict';

//'Given a natural number n. Find out if the number 3 is included in the notation n².';

const OPTIONS = {
    TO_POW: 2,
    TO_INCLUDE: '3'
};

const includes = (n) => {
    if (!n || typeof n === 'object') return  false;
    const powN = Math.pow(n, OPTIONS.TO_POW);
    const isIncludes = powN.toString().includes(OPTIONS.TO_INCLUDE);

    return isIncludes ? `n² includes ${OPTIONS.TO_INCLUDE}` : `n² missed ${OPTIONS.TO_INCLUDE}`
};

module.exports = includes;
