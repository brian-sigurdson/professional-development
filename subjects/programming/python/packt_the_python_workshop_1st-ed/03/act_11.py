def factorial_recursive(n):
  if n == 1:
    return 1
  else:
    return n * factorial_recursive(n - 1)


def fib(n):
  prev = 0
  cur = 1

  for i in range(n-1):
    cur_old = cur
    cur = prev + cur
    prev = cur_old
  return cur


# author's solution
# my skills are quite rusty. 
# it would have taken me awhile to get this solution
def fibonacci_recursive(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci_recursive(n - 2) + fibonacci_recursive(n - 1)