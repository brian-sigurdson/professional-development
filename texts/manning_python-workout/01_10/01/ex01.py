import random
import sys


def game_over(message="Game over."):
	sys.exit(message)


def guessing_game():
	lower_bound = 0
	upper_bound = 100
	random_value = random.randint(lower_bound, upper_bound + 1)
	count = 0
	max_tries = 15

	print(f"You have {max_tries} tries to guess the correct value between {lower_bound} and {upper_bound}")

	while True:
		try:
			guess = input(f"Guess a number between {lower_bound} and {upper_bound}, or 'q' to quit. ")
			if guess == 'q':
				game_over()
			elif not guess.isnumeric():
				raise ValueError
			else:
				guess = int(guess)
		except ValueError:
			print(f"The value you entered ({guess}) is not a number.  Please enter a number.")
			continue

		if guess < random_value:
			print("Too low")
		elif guess > random_value:
			print("Too high")
		else:
			print("You are correct!")
			game_over()

		count += 1
		if count >= max_tries:
			print(f"The value was {random_value}.  You are out of tries.")
			game_over()


if __name__ == "__main__":
	guessing_game()
