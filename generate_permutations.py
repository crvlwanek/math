def generate_permutations(perm, n):
    if len(perm) == n:
        print(perm)
        return

    for i in range(n):
        if i not in perm:
            perm.append(i)
            generate_permutations(perm, n)
            perm.pop()

generate_permutations([], 5)
