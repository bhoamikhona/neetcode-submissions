class Solution:
    def isValid(self, s: str) -> bool:
        opening_brackets = ['(', '{', '[']
        closing_brackets = [')', '}', ']']
        stack = []

        if len(s) % 2 == 1:
            return False

        for bracket in s:
            if bracket in opening_brackets:
                stack.append(bracket)
            else:
                if not stack:
                    return False
                
                idx = closing_brackets.index(bracket)

                if stack[-1] == opening_brackets[idx]:
                    stack.pop()
                else:
                    return False

        return len(stack) == 0
        