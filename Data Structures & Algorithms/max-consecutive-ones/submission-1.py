class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        total_sum = 0
        current_sum = 0

        for num in nums:
            if num == 1:
                current_sum += 1
            else:
                total_sum = total_sum if total_sum > current_sum else current_sum
                current_sum = 0
        
        return total_sum if total_sum > current_sum else current_sum