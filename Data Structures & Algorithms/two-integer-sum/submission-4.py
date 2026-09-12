class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        temp = {}

        for idx, val in enumerate(nums):
            diff = target - val
            if diff in temp:
                return [temp[diff], idx]
            else:
                temp[val] = idx

        return