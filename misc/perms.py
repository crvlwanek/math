class Find_Solution:

    def __init__(self, n):
        self.val = str(n)
        self.ans = None
        self.len = len(self.val)
        self.perm = []

    def find_min(self):
        if self.ans:
            return
        ans = "".join([self.val[i] for i in self.perm])
        if len(self.perm) == self.len:
            if int(ans) > int(self.val):
                self.ans = int(ans)
                return
            return

        for i in range(self.len):
            if i not in self.perm:
                self.perm.append(i)

                if self.can_be_extended():
                    self.find_min()

                self.perm.pop()

    def can_be_extended(self):
        curr_perm = int("".join([self.val[i] for i in self.perm]))
        curr_num = int(self.val[:len(self.perm)])
        if curr_perm >= curr_num:
            print(curr_perm, ',', curr_num)
            return True

n = 230241
output = Find_Solution(n)
output.find_min()
ans = output.ans
if ans and ans.bit_length() < 32:
    print(ans)
else:
    print(-1)
