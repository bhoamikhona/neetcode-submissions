class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = {};

        for (let i = 0; i < nums.length; i++) {
            const temp = target - nums[i];
            if (hashmap[temp] !== undefined) {
                return [hashmap[temp], i]
            } else {
                hashmap[nums[i]] = i;
            }
        }
    }
}
