release_year = 1991
answer = None

while True:
	answer = input("Python was released in 1991.  True or False? ").lower()

	if answer == 'true':
		answer = True
		print("Correct!")
		break
	elif answer.lower() == 'false':
		answer = False
		print("Wrong")
		break
	else:
		print("Please enter True or False")

print("bye")