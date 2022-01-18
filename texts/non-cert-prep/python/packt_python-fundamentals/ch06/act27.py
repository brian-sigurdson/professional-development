def find_union(list1, list2):
	union_list = list()

	for val in list1 + list2:
		if val not in union_list:
			union_list.append(val)

	return union_list


print(find_union([1, 2, 3, 3, 4], [3, 4, 5, 5, 6]))
print(find_union([1, 2, 3, 4], [3, 4, 5, 6]))