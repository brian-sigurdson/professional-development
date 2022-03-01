def sentence_analyzer(sentence):
	# break the sentence into individual characters
	# keys = tuple(sentence)

	# just testing
	# print(list(sentence))

	# create an empty dictionary
	counts = dict()

	# iterate over the values
	for key in sentence:
		if key in counts:
			# safe to cal get
			counts[key] += 1
		else:
			# first value for the key
			counts[key] = 1

	return counts


print(sentence_analyzer("Pythonnnn the dragon slayer"))