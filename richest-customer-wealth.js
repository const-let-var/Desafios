const assert = require('assert')

var maximumWealth = function (accounts) {
    return accounts.map(el => el.reduce(
        (prev, curr) => prev + curr,
        0
    )).sort((a, b) => b - a)[0]
}

assert.equal(maximumWealth([[1,2,3],[3,2,1]]), 6)
assert.equal(maximumWealth([[1,5],[7,3],[3,5]]), 10)
assert.equal(maximumWealth( [[2,8,7],[7,1,3],[1,9,5]]), 17)