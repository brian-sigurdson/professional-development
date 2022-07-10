# def fib_int(n):
#   if n <= 2:
#     return 1
#   elif n == 3:
#     return 2
#   else:
#     # start with n = 4
#     i_2 = 1
#     i_1 = 2  
#     i_0 = i_2 + i_1
#     for i in range(n-4):
#       i_2 = i_1
#       i_1 = i_0
#       i_0 = i_2 + i_1

#     return i_0


# print(fib_int(3))
# print(fib_int(4))
# print(fib_int(10))

# i didn't really think it through
# much simpler

def fib(n):
  prev = 0
  cur = 1

  for i in range(n-1):
    cur_old = cur
    cur = prev + cur
    prev = cur_old
  return cur


print(fib(10))