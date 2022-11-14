const assert = require('assert')

var romanToInt = function (s) {
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0

    for (let i = 0; i < s.length; i++) {
        const current = sym[s[i]]
        const next = sym[s[i + 1]]

        if (current < next) { // all numbers goes from grater to lesser.
            // only exception is IX, IV etc
            result += next - current
            i++
            continue
        }

        result += current
    }

    return result
};

assert.equal(romanToInt('III'), 3)
assert.equal(romanToInt('I'), 1)
assert.equal(romanToInt('LVIII'), 58)
assert.equal(romanToInt('MCMXCIV'), 1994)
assert.equal(romanToInt('MMMCMXCIX'), 3999)
assert.equal(romanToInt('MCDLXXXIX'), 1489)
console.log("All done")
