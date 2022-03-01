with open('myfile2.txt', 'w') as f:
	for val in range(3):
		f.write("I love Python!")
		f.write("\n")


# with open('myfile2.txt', 'r') as f:
# 	for line in f:
# 		print(line)


# with open('myfile2.txt', 'r') as f:
# 	lines = f.readlines()
#
# 	for line in lines:
# 		print(line)

with open('myfile2.txt', 'r') as f:
	lines = f.readlines()
	for line in lines:
		print(lines)