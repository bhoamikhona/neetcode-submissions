class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        temp = {}

        for index, num in enumerate(nums):
            if target - num in temp:
                return [temp[target - num], index]
            temp[num] = index