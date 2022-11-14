const assert = require('assert')

// space O(n)
// time O(k*n)

var canConstruct = function (ransomNote, magazine) {
    const arr = magazine.split('')

    for (let i = 0; i < ransomNote.length; i++) {
        const index = arr.indexOf(ransomNote[i])
        if (index === -1) {
            return false
        }
        arr[index] = ''
    }

    return true
}

assert.equal(canConstruct('aa','a'), false)
assert.equal(canConstruct('bb','a'), false)
assert.equal(canConstruct('ara','aarra'), true)
assert.equal(canConstruct('','aarra'), true)
assert.equal(canConstruct('',''), true)