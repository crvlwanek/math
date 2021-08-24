from math import sqrt

def mean_list(items):
    return sum([item for item in items]) / len(items)

def variance_list(items):
    return sum([item - mean_list(items)**2 for item in items]) / (len(items) - 1)

def standard_deviation_list(items):
    return sqrt(variance(items))

def mean(n, p):
    return n * p

def standard_deviation(n, p):
    return sqrt(mean(n, p) * (1 - p))

# k = num_successes, n = num_trials, p = success_prob
def z_score(k, n, p):
    return (k - mean(n, p)) / standard_deviation(n, p)
# m = mean, sd = standard_deviation
def z_obs(k, m, sd):
    return (k - m) / sd

print(z_score(35, 3000000, .00001))
