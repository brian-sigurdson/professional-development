release_year = 1991
correct = False

while not correct:
	answer = int(input("What year was Python released? "))

	if answer == release_year:
		print("Correct")
		correct = True
	else:
		print("Try again")

print("bye")

