class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        temp = {}
        
        for letter in magazine:
            temp[letter] = 1 + temp.get(letter, 0)
        
        for letter in ransomNote:
            if letter not in temp:
                return False
            elif temp[letter] == 1:
                del temp[letter]
            else:
                temp[letter] -= 1

        return True
