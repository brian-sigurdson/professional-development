from mimetypes import guess_all_extensions
import random

def guess_a_value():
	min = 0
	max = 100
	number = random.randint(min, max)

	while True:
		user_input = int(input(f"Guess a value between {min} and {max} "))
		print(f"You entered: {user_input}")

		if user_input < number:
			print("Too low. Try again.")
		elif user_input > number:
			print("Too high. Try again.")
		else:
			print(f"Correct!  The value was {number}")
			break

guess_a_value()