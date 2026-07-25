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

        const dict_s = {}
        const dict_t = {}

        for (const letter of s) {

            if (dict_s[letter]) {
                dict_s[letter] += 1;
            } else {
                dict_s[letter] = 1;
            }
        }

        for (const letter of t) {
            if (dict_t[letter]) {
                dict_t[letter] += 1;
            } else {
                dict_t[letter] = 1;
            }
        }

        for (const char in dict_t) {
            if (dict_t[char] !== dict_s[char]) {
                return false;
            }
        }

        return true;
    }
}