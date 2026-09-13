class Solution:
    def firstUniqChar(self, s: str) -> int:
        temp = {}

        for letter in s:
            temp[letter] = 1 + temp.get(letter, 0)

        for idx, val in enumerate(s):
            if temp[val] == 1:
                return idx
        
        return -1