mylist = [55, 12, 37, 831, 57, 16, 93, 44, 22]

# print("Array: " + mylist.__str__())
print(f"Array: {mylist}")

number = int(input("Number of elements to fetch from array: "))

print(mylist[:number])
