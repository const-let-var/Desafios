/* Given an array, rotate the array to the right by k steps,
 where k is non-negative */

const assert = require('assert');

var rotate = function (nums, k) {

    const max = nums.length - 1
    const length = nums.length
    let shifted = null
    let tmp = null
    let prev = null

    if (k > length) {
        const reminder = k % length
        if (!reminder)
            return nums
        k = reminder
    }

    const walk = (from) => {
        shifted = from
        tmp = null
        prev = nums[from]

        do {
            shifted = shifted + k

            if (shifted > max) {
                shifted = shifted - max - 1
            }

            tmp = nums[shifted]
            nums[shifted] = prev
            prev = tmp
        } while (shifted !== from)
    }

    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b)
    }

    const edge = gcd(length, k)

    for (let index = 0; index < edge; index++) {
        walk(index)
    }

    return nums
};

assert.deepEqual(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5),
    [11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
assert.deepEqual(rotate([1, 2, 3, 4, 5, 6], 4), [3, 4, 5, 6, 1, 2])
assert.deepEqual(rotate([1, 2, 3, 4, 5, 6], 2), [5, 6, 1, 2, 3, 4])
assert.deepEqual(rotate([1, 2, 3], 1), [3, 1, 2])
assert.deepEqual(rotate([1, 2], 3), [2, 1])
assert.deepEqual(rotate([-1], 200), [-1])
assert.deepEqual(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
assert.deepEqual(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])
