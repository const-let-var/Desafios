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


var middleNode = function (head) {
    let fast = head
    let slow = head
    let length = 0

    while (fast) {
        length++
        fast = fast.next

        if (fast) {
            length++
            fast = fast.next
        } else {
            break
        }

        slow = slow.next
    }

    return slow
}

assert.equal(middleNode(fill([1, 2, 3, 4, 5])).val, 3)
assert.equal(middleNode(fill([1, 2, 4, 5])).val, 4)
assert.equal(middleNode(fill([1, 2])).val, 2)