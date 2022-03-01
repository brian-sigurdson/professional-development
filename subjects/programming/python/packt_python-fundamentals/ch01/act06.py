""" Activity 6:  Create a multiplication table"""

number = int(input("Enter a number: "))

print("_" * 20)
for val in range(1, number + 1):
	print(f"{val}: {val * number}")

print("_" * 20)

