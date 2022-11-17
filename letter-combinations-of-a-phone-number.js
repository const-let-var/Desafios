const assert = require('assert')

// space O(n)
// time O(n^2)

var letterCombinations = function (digits) {
    const hash = new Map()
    let result = []
    hash.set('2', ['a', 'b', 'c'])
    hash.set('3', ['d', 'e', 'f'])
    hash.set('4', ['g', 'h', 'i'])
    hash.set('5', ['j', 'k', 'l'])
    hash.set('6', ['m', 'n', 'o'])
    hash.set('7', ['p', 'q', 'r', 's'])
    hash.set('8', ['t', 'u', 'v'])
    hash.set('9', ['w', 'x', 'y', 'z'])

    if (digits === '') {
        return []
    }

    const mult = (arr) => {
        result = result.reduce((r,n) =>{
            for (const letter of arr) {
                r.push(n + letter)
            }
            return r
          },[])
    }

    const strArr = digits.split('')

    for (let i = 0; i < strArr.length; i++) {

        if (!hash.has(strArr[i])) {
            continue
        }

        if (i === 0) {
            result = hash.get(strArr[i])
            continue
        }

        mult(hash.get(strArr[i]))
    }

    return result
}

assert.deepEqual(letterCombinations(""), [])
assert.deepEqual(letterCombinations("23"),
    ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
assert.deepEqual(letterCombinations("234"),
["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"])    