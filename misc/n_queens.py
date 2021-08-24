def can_be_extended_to_solution(perm):
    i = len(perm) - 1
    for j in range(i):
        if i - j == abs(perm[i] - perm[j]):
            return False
    return True

def extend(perm, n):
    global solutions
    if len(perm) == n:
        print(perm)
        solutions += 1


    for i in range(n):
        if i not in perm:
            perm.append(i)

            if can_be_extended_to_solution(perm):
                extend(perm, n)

            perm.pop()



solutions = 0
extend([], 16)
print(solutions)
