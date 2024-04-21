def sum_first_n(n):
  result = 0
  for i in range(n):
    result += i + 1
  return result

print(sum_first_n(100))