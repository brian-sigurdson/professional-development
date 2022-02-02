import random


try:
	print(random.randinteger(1,10))
except AttributeError:
	print("An AttributeError occurred.")

print("Continue processing here.")