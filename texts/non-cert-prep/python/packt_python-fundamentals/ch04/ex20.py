answer = lambda first, second : first + second


print(answer(6, 9))

numbers = [2, 4, 6, 8 , 10]
squared = list(map(lambda num: num **2, numbers))
print(squared)

sq_again = [n ** 2 for n in numbers]
print(sq_again)