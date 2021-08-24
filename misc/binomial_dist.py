def factorial(num):
    if num == 1 or num == 0:
        return 1
    else:
        return num * factorial(num-1)

# n = num_trials, k = num_successes
def num_outcomes(n, k):
    return factorial(n) / (factorial(k) * factorial(n-k))

# p = success_prob
def binomial_dist(n, k, p):
    return num_outcomes(n, k) * p**k * (1-p)**(n-k)

print(binomial_dist(10, 0, .07))
