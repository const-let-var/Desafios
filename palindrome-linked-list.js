const assert = require('assert')

// space O(1)
// time O(n)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function fill(arr) {
    let head
    while (arr.length != 0) {

        if (!head) {
            head = new ListNode(arr.pop())
            continue
        }

        head = new ListNode(arr.pop(), head)
    }
    return head
}

var isPalindrome = function (head) {

    if (!head) {
        return false
    }

    if (!head.next) {
        return true
    }

    let fast = head
    let slow = head
    let final = head
    let result = true
    let prev = null
    let next = null
    let length = 0

    //  finding list centre
    while (fast) {
        fast = fast.next
        length++

        if (fast) {
            length++
            fast = fast.next
        } else {
            break
        }

        slow = slow.next
    }

    //console.log('length', length)

    // keep the middle element to the first half
    if (length % 2 !== 0) {
        slow = slow.next
    }

    //  reverse the second half
    while (slow) {
        next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    slow = prev
    prev = null
    next = null

    //find the solution + reverse back
    while (slow) {

        if (final.val !== slow.val) {
            result = false
        }

        next = slow.next
        slow.next = prev
        prev = slow
        slow = next
        final = final.next
    }

    return result

}

assert.equal(isPalindrome(fill([1, 2, 3, 4, 5])), false)
assert.equal(isPalindrome(fill([1, 2, 2, 1])), true)
assert.equal(isPalindrome(fill([1, 2, 7, 2, 1])), true)
assert.equal(isPalindrome(fill([1, 1])), true)
assert.equal(isPalindrome(fill([1])), true)
assert.equal(isPalindrome(fill([1, 2])), false)
assert.equal(isPalindrome(fill([1, 0, 0])), false)
assert.equal(isPalindrome(fill([1, 1, 0, 0, 1])), false)
