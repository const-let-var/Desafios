const assert = require('assert')

// time O(logn)
// space O(1)

var numberOfSteps = function (num) {
    let steps = 0

    while (num) {
        steps++

        if (num % 2 == 0) {
            num = num / 2
            continue
        }

        num--
    }

    return steps
}

assert.equal(numberOfSteps(14), 6)
assert.equal(numberOfSteps(8), 4)
assert.equal(numberOfSteps(123), 12)
assert.equal(numberOfSteps(123), 12)