def mysum(*args):
	start = 0

	if args is None:
		return None
	else:
		for item in args:
			start += item

	return start


if __name__ == "__main__":
	mylist = [1, 2, 3, 4, 5]
	print(mysum(*mylist))

	mytup = (1, 2, 3)
	print(mysum(*mytup))

	print(mysum(10, 20, 30, 40))


