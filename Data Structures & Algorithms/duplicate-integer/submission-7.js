class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const temp = [];

        for (let i = 0; i < nums.length; i++) {
            if (temp.includes(nums[i])) {
                return true;
            } else {
                temp.push(nums[i]);
            }
        }

        return false;
    }

}
