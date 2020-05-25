function digitNum(num) { //OK!
    if(isNaN(num)) throw new Error('You provided string')
    return String(Math.abs(num)).length
}

module.exports = digitNum