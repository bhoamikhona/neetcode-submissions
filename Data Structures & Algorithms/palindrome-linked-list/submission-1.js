/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let fast = head;
        let slow = head;


        // find middle (slow pointer)
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // reverse the second half of the linked list (from slow to end)
        let prev = null;

        while (slow !== null) {
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }

        // check palindrome
        let left = head;
        let right = prev;

        while (left !== null && right !== null) {
            if (left.val !== right.val) {
                return false;
            }
            left = left.next;
            right = right.next;
        }

        return true;
    }
}
