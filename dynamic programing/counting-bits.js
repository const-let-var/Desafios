/* Given an integer n, return an array ans of length n + 1
such that for each i (0 <= i <= n), ans[i] is the number
of 1's in the binary representation of i. */

const assert = require('assert')

var countBits = function (n) {
  let result = []

  for (let index = 0; index <= n; index++) {
    result.push((index >>> 0).toString(2).split('')
    .filter(el => el === '1').length)
  }

  return result
}

assert.deepEqual(countBits(2), [0, 1, 1])

