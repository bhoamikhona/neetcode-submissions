class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let left = 0;
        let output = 0;
        let number;

        for (let right = 0; right < nums.length; right++) {
            number = nums[right];

            if (number === 0) {
                left = right + 1;
            }

            output = Math.max(output, right - left + 1);
        }

        return output;
    }
}
