function digitSum(num) {
    if(isNaN(num)) throw new Error('You provided string')
    return String(Math.abs(num)).split('').reduce((prev, curr) => prev += Number(curr), 0)
}

module.exports = digitSum