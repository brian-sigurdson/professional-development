wild = ["lion", "zebra", "panther", "antelope"]

print(f"wild = {wild}")

wild.append("elephant")

animals = []
animals.extend(wild)

animals.insert(2, "cheetah")
animals.pop(1)
animals.insert(1, "giraffe")

print(f"wild = {wild}")
print(f"animals = {animals}")
animals.sort()
print(f"sorted animals = {animals}")