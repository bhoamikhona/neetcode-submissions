class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let currentMax = 0;
        let overallMax = 0;

        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] === 1) {
                currentMax += 1;
            } else {
                overallMax = currentMax > overallMax ? currentMax : overallMax;
                currentMax = 0;
            }
        }

        return currentMax > overallMax ? currentMax : overallMax;

    }
}
