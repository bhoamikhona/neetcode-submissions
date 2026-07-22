# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        
        # find middle (slow pointer)
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

        # reverse the middle through end portion of the linked list
        prev = None

        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        
        # check palindrome
        left = head
        right = prev
        
        while left and right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        
        return True