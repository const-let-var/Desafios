const assert = require('assert')

// space O(n)
// time O(n)

var twoSum = function (nums, target) {
    const hash = new Map()

    for (let i =
        0; i < nums.length; i++) {

        if (hash.has(nums[i] + '')) {
            return [hash.get(nums[i] + ''), i]
        }

        hash.set(target - nums[i] + '', i)
    }

    return []

}

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2])
assert.deepEqual(twoSum([3, 3], 6), [0, 1])
assert.deepEqual(twoSum([10, -1], 9), [0, 1])