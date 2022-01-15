def many_args(*args):
	for val in args:
		if isinstance(val, int):
			continue
		else:
			print(val)


many_args(2,3.4,"s", 1.0, True, False)


