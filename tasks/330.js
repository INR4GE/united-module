// THE GOAL IS:
// To find perfect numbers up to N

function isPerfect(num) {
    const factors = new Set([1])
    for (let i = 2; i < Math.sqrt(num - 1); i++) {
        if (num % i === 0) {
            factors.add(i).add(num / i)
        }
    }
    return Array.from(factors).reduce((prev, curr) => prev + curr) === num
}

function perfectsUpToN(n) {
    const perfects = []
    for (let i = 0; i < n; i++) {
        if (isPerfect(i)) {
            perfects.push(i)
        }
    }
    return perfects
}

const myModule = module.exports = perfectsUpToN
myModule.isPerfect = isPerfect