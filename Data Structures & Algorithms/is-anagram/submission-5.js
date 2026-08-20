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

        const s_dict = {};
        const t_dict = {};


        for (let i = 0; i < s.length; i++) {
            // s string
            if (!s_dict[s[i]]) {
                s_dict[s[i]] = 1;
            } else {
                s_dict[s[i]] += 1;
            }

            // t string
            if (!t_dict[t[i]]) {
                t_dict[t[i]] = 1;
            } else {
                t_dict[t[i]] += 1;
            }

        }

        for (let key of Object.keys(s_dict)) {
            if (s_dict[key] !== t_dict[key]) {
                return false;
            }
        }

        return true;
    }
}
