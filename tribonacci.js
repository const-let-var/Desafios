const assert = require('assert')

var tribonacci = function (n) {

    const hash = new Map()

    if (n === 0) {
        return 0
    }

    const dp = []

    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

    for (let index = 3; index <= n; index++) {
        dp[index] = dp[index - 2] + dp[index - 1] + dp[index - 3]
    }

    return dp[n]

}

assert.equal(tribonacci(4), 4)
assert.equal(tribonacci(25), 1389537)
