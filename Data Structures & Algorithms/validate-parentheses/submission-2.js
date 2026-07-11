class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openingBrackets = ['(', '{', '['];
        const closingBrackets = [')', '}', ']'];
        const stack = [];

        if (s.length % 2 === 1) return false

        for (let i = 0; i < s.length; i++) {
            if (openingBrackets.includes(s[i])) {
                stack.push(s[i]);
            } else if (closingBrackets.includes(s[i])) {
                const idx = closingBrackets.indexOf(s[i]);
                if (stack[stack.length - 1] === openingBrackets[idx]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return (stack.length !== 0) ? false : true;
    }
}
