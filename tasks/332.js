function lagrange(num) {
    let resultsArr = [];
    let max = num;
    for (let x = 0; x <= max; x++) {
        for (let y = 0; y <= max; y++) {
            for (let z = 0; z <= max; z++) {
                for (let t = 0; t <= max; t++) {
                    if (x * x + y * y + z * z + t * t === max) {
                        resultsArr.push([x, y, z, t])
                    }
                }
            }
        }
    }

    resultsArr.map(item => item.sort());
    let uniqueResults = [resultsArr[0]];

    for (let i = 0; i < resultsArr.length; i++) {
        if (uniqueResults[0].toString() !== resultsArr[i].toString()) {
            uniqueResults.push(resultsArr[i])
        }
    }
    for (let i = 0; i < uniqueResults.length; i++) {
        return `x:${uniqueResults[i][0]} y:${uniqueResults[i][1]} z:${uniqueResults[i][2]} t:${uniqueResults[i][3]}`;
    }
}

module.exports = lagrange;