release_year = 1991
answer  = input("When was Python first released? ")

if answer == release_year:
	print("Congratulations!  That is correct.")
elif answer < release_year:
	print("Too early")
elif answer > release_year:
	print("Too late")

print("bye")