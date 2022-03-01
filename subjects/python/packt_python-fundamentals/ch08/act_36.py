import random

def random_number_generator(count):
	my_list = []

	for val in range(count):
		my_list.append(random.randint(0, 1000))

	return my_list


print(random_number_generator(3))
