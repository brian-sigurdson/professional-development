def factorial_iterative(n):
  result = 1
  for i in range(n):
    # print(i)
    result *= i + 1
  return result

def factorial_recursive(n):
  if n == 1:
    return 1
  else:
    return n * factorial_recursive(n - 1)

print(factorial_iterative(5))
print(factorial_recursive(5))