class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        pointer = len(arr) - 1
        max_val = -1

        while pointer >= 0:
            current_val = arr[pointer]
            arr[pointer] = max_val
            
            if current_val > max_val:
                max_val = current_val

            pointer -= 1

        return arr