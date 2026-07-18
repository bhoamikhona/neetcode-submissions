class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}

        for index, value in enumerate(nums):
            temp = target - value
            if temp in dict:
                return [dict[temp], index]
            else:
                dict[value] = index