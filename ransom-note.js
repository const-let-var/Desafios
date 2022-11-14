const assert = require('assert')

// space O(1)
// time O(n)

var canConstruct = function (ransomNote, magazine) {
    const hash = new Map()

    for (let i = 0; i < magazine.length; i++) {
        if (hash.has(magazine[i])) {
            hash.set(magazine[i], hash.get(magazine[i]) + 1)
            continue
        }
        hash.set(magazine[i], 1)
    }

    for (let i = 0; i < ransomNote.length; i++) {

        if (hash.get(ransomNote[i])) {
            hash.set(ransomNote[i], hash.get(ransomNote[i]) - 1)
            continue
        }

        return false
    }

    return true
}

assert.equal(canConstruct('aa', 'a'), false)
assert.equal(canConstruct('bb', 'a'), false)
assert.equal(canConstruct('ara', 'aarra'), true)
assert.equal(canConstruct('', 'aarra'), true)
assert.equal(canConstruct('', ''), true)