import csv


def create_input_file():
	with open('act_38_input.csv', 'w', newline='', encoding='utf-8') as f:
		example_data_writer = csv.writer(f)
		example_data_writer.writerow(['name', 'hours_worked'])
		example_data_writer.writerow(['James Miller', 36])
		example_data_writer.writerow(['Teresia Brown', 41])
		example_data_writer.writerow(['Mary Laney', 40])


def read_data():
	with open('act_38_input.csv', 'r') as f:
		return list(csv.reader(f))


def calculate_wages():
	inputs = read_data()
	outputs = list()

	for val in inputs:
		if val[0] == 'name':
			pass
		else:
			# print(val[0])
			outputs.append([val[0], f"${int(val[1]) * 15}"])

	for val in outputs:
		print(val)

create_input_file()
calculate_wages()


# with open('MOCK_DATA.csv', 'r') as f:
# 	mock_data_reader = csv.reader(f)
#
# 	line_count = 1
#
# 	for row in mock_data_reader:
# 		if line_count > 1:
# 			print(row)
#
# 		line_count += 1


# with open('people.csv', 'w', newline='', encoding='utf-8') as f:
# 	fields = ['name', 'age']
# 	people_writer = csv.DictWriter(f, fieldnames=fields)
#
# 	people_writer.writeheader()
# 	people_writer.writerow({'name':'Santa Claus', 'age': 1000})

