# the instructions for this exercise weren't really clear, but seems to assume that duplicate keys mean
# duplicate values as well.  Duplicate keys will be ignored.

def dictionary_masher(dict1, dict2):

	copy = dict1.copy()

	for key, value in dict2.items():
		if key not in copy:
			copy[key] = value

	return copy


print(dictionary_masher({"name": "Amos"}, {"age": 100}))

