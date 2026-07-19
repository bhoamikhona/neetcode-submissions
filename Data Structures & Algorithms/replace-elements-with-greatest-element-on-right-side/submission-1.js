class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxVal = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            let current = arr[i];
            arr[i] = maxVal;
            maxVal = current > maxVal ? current : maxVal;
        }
        arr[arr.length - 1] = -1;

        return arr;
    }
}
