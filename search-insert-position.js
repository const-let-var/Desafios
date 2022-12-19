const assert = require('assert')

var searchInsert = function (nums, target) {
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
            if (end === middle)
                return end
            if (target > nums[middle])
                return end
            return middle
        }
    }

    return 0
}

assert.equal(search([-1, 0, 3, 5, 9, 12], 2), 2)
assert.equal(search([1, 3, 5, 7], 6), 3)
assert.equal(search([5], -5), 0)
assert.equal(search([-1, 0, 3, 5, 9, 12], 3), 2)
assert.equal(search([-1, 0, 3, 5, 9, 12], -1), 0)
assert.equal(search([3, 7], 3), 0)
assert.equal(search([7], 7), 0)
assert.equal(search([-1, 0, 3, 5, 9, 12], 9), 4)
