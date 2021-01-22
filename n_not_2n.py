import sys

def n_not_2n(size):
    solutions = list()
    for i in range(size):
        curr = i + 1
        if curr % 2 == 0:
            continue
        while curr < size:
            solutions.append(curr)
            curr *= 4

    return solutions

nums = n_not_2n(int(sys.argv[1]))
nums.sort()
print(nums)
print(len(nums))
