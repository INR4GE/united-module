function digitSum(num) {
    return String(Math.abs(num)).split('').reduce((prev, curr) => prev += Number(curr), 0)
}

module.exports = digitSum