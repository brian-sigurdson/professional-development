dict1 = dict(state="NY", city="New York")

for item in dict1:
	print(f"item: {item}")

for item in dict1.items():
	print(f"item: {item}")

for value in dict1.values():
	print(f"value: {value}")

for item, value in dict1.items():
	print(f"key: {item}")
	print(f"value: {value}")