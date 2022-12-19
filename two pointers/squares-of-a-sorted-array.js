/* Given an integer array nums sorted in non - decreasing order,
 return an array of the squares of each number sorted 
 in non - decreasing order. */

const assert = require('assert')

var sortedSquares = function (nums) {

    let result = new Array(nums.length)
    let left = 0
    let right = nums.length - 1

    for (let index = right; index >= 0; index--) {

        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            result[index] = nums[right] * nums[right]
            right--
        } else {
            result[index] = nums[left] * nums[left]
            left++
        }
    }

    return result
};

assert.deepEqual(sortedSquares([-1, 0, 1]), [0, 1, 1])
assert.deepEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])