/* Given an integer x, return true if x is a
palindrome, and false otherwise. */

const assert = require('assert')

var isPalindrome = function (x) {

    if (x < 0) {
        return false
    }

    if (x === 0) {
        return true
    }

    let reversedArr = []
    let original = x

    while (original) {
        reversedArr.push((original % 10))
        original = Math.trunc(original / 10)
    }

    let reversed = 0

    for (let index = 0; index < reversedArr.length; index++) {
        reversed += reversedArr[index] * Math.pow(10, reversedArr.length - index - 1)
    }

    return reversed === x

};

assert.strictEqual(isPalindrome(123), false)
assert.strictEqual(isPalindrome(1221), true)
assert.strictEqual(isPalindrome(-1221), false)
assert.strictEqual(isPalindrome(0), true)