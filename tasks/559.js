const mersens = (n) => {
    let arr = Array(n).fill(0)
    arr = arr.map((_, i) => i+1)
    return arr.filter((e) => arr.some(elem => Math.pow(2,elem) - 1 == e) )
}

module.exports = mersens