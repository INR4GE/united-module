const mutual = (n, m) => {
    let arr = Array(Math.abs(n * m)).fill(0)
    return arr.map((_, i) => i+1).filter((e) => e%n == 0 && e%m == 0)
}
  
module.exports = mutual