def generate_permutations(s, perm=[], ans=None):
    if ans:
        return
    n = len(s)
    if len(perm) == n and s[perm[-1]] != s[-1]:
        ans = "".join([s[i] for i in perm])
        return

    for i in range(n):
        if i not in perm:
            perm.append(i)

            if can_be_extended(s, perm):
                generate_permutations(s, perm)

            perm.pop()

def can_be_extended(s, perm):
    return int("".join([s[i] for i in perm])) >= int(s[:len(perm)])

n = 381746
generate_permutations(str(n), [])
