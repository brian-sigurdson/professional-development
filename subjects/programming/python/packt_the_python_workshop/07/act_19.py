names = ["alan", "barbra", "carl", "diane"]
scores = [88, 93, 94, 74]

the_dict = {}

for i in range(0, len(names)):
    the_dict[names[i]] = scores[i]


print(the_dict)