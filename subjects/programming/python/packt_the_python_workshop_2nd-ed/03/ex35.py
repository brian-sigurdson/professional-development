"""This script computes the factorial for a list of numbers"""

import math

numbers = [5, 7, 11]

total = 0
for n in numbers:
    total += math.factorial(n)

print(total)