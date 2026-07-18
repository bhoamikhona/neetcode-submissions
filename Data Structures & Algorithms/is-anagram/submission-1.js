class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const obj_s = {};
        const obj_t = {};

        for (let i = 0; i < s.length; i++) {
            if (!obj_s[s[i]]) {
                obj_s[s[i]] = 1;
            } else {
                obj_s[s[i]] += 1;
            }

            if (!obj_t[t[i]]) {
                obj_t[t[i]] = 1;
            } else {
                obj_t[t[i]] += 1;
            }
        }

        for (const char in obj_s) {
            if (obj_s[char] !== obj_t[char]) {
                return false;
            }
        }

        return true;
    }
}