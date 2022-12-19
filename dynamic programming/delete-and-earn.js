// You are given an integer array nums.
// You want to maximize the number of points you get by performing
// the following operation any number of times:
// Pick any nums[i] and delete it to earn nums[i] points.
// Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above operation some number of times.
const assert = require('assert')

// 0 1 2 3 4 5 6 7 8 9 
// 0 3 0 7 0 0 6 5 0 0


var deleteAndEarn = function (nums) {

    const hash = new Map()
    let maxNumber = 0

    for (let index = 0; index < nums.length; index++) {

        if (hash.has(nums[index])) {
            hash.set(nums[index], hash.get(nums[index]) + 1)
        } else {
            hash.set(nums[index], 1)
            maxNumber = Math.max(maxNumber, nums[index])
        }
    }

    const dp = new Array(maxNumber+1).fill(0)

    dp[1] = hash.get(1) || 0

    for (let index = 2; index < dp.length; index++) {
        dp[index] = Math.max(
            dp[index - 2] + index*(hash.get(index) || 0),
            dp[index - 1]
        )
    }


    return dp[maxNumber]
}

assert.equal(deleteAndEarn([1, 6, 3, 3, 8, 4, 8, 10, 1, 3]), 43)
assert.equal(deleteAndEarn([3, 1]), 4)
assert.equal(deleteAndEarn([3, 4, 2]), 6)
assert.equal(deleteAndEarn([2, 2, 3, 3, 3, 4]), 9)