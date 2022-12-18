/* Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index.Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity. */

const assert = require('assert')

var search = function (nums, target) {
    let end = nums.length
    let middle = Math.trunc(end / 2)
    let prev

    while (middle >= 0 && middle <= end) {

        console.log(nums, target, middle)
        prev = middle

        if (nums[middle] === target)
            return middle

        if (nums[middle] > target) {
            end = middle
            middle = Math.trunc(middle / 2)
        } else {
            middle = middle + Math.trunc((end - middle) / 2)
        }

        if (prev === middle) {
            if (nums[middle] === target)
                return middle
            if (nums[end] === target)
                return end
            return -1
        }

    }

    return -1
}

assert.equal(search([5], -5), -1)
assert.equal(search([-1, 0, 3, 5, 9, 12], 3), 2)
assert.equal(search([-1, 0, 3, 5, 9, 12], -1), 0)
assert.equal(search([3, 7], 3), 0)
assert.equal(search([7], 7), 0)
assert.equal(search([-1, 0, 3, 5, 9, 12], 9), 4)
assert.equal(search([-1, 0, 3, 5, 9, 12], 2), -1)

