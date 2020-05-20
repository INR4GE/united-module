const sum = (n, m, s = 0, k = 0) => {
    if(k == m || m >= n)
      return s
    return sum(n-1, m, s+n, k+1)
}

module.exports = sum