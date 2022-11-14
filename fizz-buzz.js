const assert = require('assert')

// space O(1)
// time O(n)

var fizzBuzz = function (n) {
    const result = []

    while (n) {
        if (n % 3 === 0 && n % 5 === 0) {
            result.push('FizzBuzz')
        } else if (n % 3 === 0) {
            result.push('Fizz')
        } else if (n % 5 === 0) {
            result.push('Buzz')
        }else{
             result.push(n + '')
        }
        n--
    }

    return result.reverse()
}

assert.deepEqual(fizzBuzz(3), ['1','2','Fizz'])
assert.deepEqual(fizzBuzz(5), ['1','2','Fizz','4','Buzz'])
assert.deepEqual(fizzBuzz(15), ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])

