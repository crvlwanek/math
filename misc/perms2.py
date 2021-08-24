class Number:

    def __init__(self, n):
        self.val = n
        self.str = str(n)
        self.len = len(self.str)
        self.ans = None
        self.perm = []
        self.curr = None
        self.sort = "".join([char for char in self.str].sort())
        print(self.sort)

    def update(self):
        if self.perm:
            self.curr = int("".join([self.str[i] for i in self.perm]))

    def find_min(self):
        if self.ans:
            return
        if len(self.perm) == self.len:
            self.update()
            if self.curr > self.val:
                self.ans = self.curr
                return
            return

        for i in range(self.len):
            if i not in self.perm:
                self.perm.append(i)

                if self.can_be_extended():
                    self.find_min()

                self.perm.pop()

    def can_be_extended(self):
        self.update()
        print(self.curr, int(self.str[:len(self.perm)]))
        return self.curr >= int(self.str[:len(self.perm)])

n = 230241
output = Number(n)
output.find_min()
ans = output.ans
if ans and ans.bit_length() < 32:
    print(ans)
else:
    print(-1)
