def is_not_prime(num):
    for i in range(2, num//3):
        if num % i == 0:
            print(i)
            return True

# for i in range(2, 1000000):
#     if is_not_prime(i**2 + i + 41):
#         print(i)

is_not_prime(1681)
