from math import log

# Interest compounded daily
def calculate_interest(principle, interest, target):
    return ( log(target / principle) / log( (interest+100)/100 ) ) + 1

p = int(input("Principle: "))
i = int(input("Interest: "))
t = int(input("Target: "))

days = calculate_interest(p, i, t)
print("Number of days: ", days)
