class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let currentMax = 0;
        let overallMax = 0;

        for (let i = 0; i <= nums.length; i++) {
            currentMax = nums[i] === 1 ? currentMax + 1 : 0;
            overallMax = currentMax > overallMax ? currentMax : overallMax;
        }

        return overallMax;

    }
}
