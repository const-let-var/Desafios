const assert = require('assert')

var minCostClimbingStairs = function (cost) {

    const memo = new Map()

    const dp = (n) => {

        if (n <= 1) {
            return 0
        }

        if (!memo.has(n)) {
            memo.set(n, Math.min(
                dp(n - 1)+ cost[n-1],
                dp(n - 2) + cost[n-2]
            ))
        }

        return memo.get(n)
    }

    return dp(cost.length)
}

assert.equal(minCostClimbingStairs([10, 15, 20]), 15)
assert.equal(minCostClimbingStairs([10, 15, 20, 9]), 24)
assert.equal(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6)