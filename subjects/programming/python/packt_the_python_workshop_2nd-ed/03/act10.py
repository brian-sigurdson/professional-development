def fib_iter(n):
    prior = 0
    current = 1
    next = prior + current
    myList = [prior, current, next]

    for i in range(2, n):
        prior = current
        current = next 
        next = prior + current
        myList.append(next)

    return myList


print(fib_iter(3))
print(fib_iter(4))
print(fib_iter(5))
print(fib_iter(6))
print(fib_iter(10))