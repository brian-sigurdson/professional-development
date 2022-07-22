cubes = []
nums = [1,2,3,4,5]

for x in nums:
    cubes.append(x**3)

print(cubes)

cubes = [x**3 for x in nums]
print(cubes)

end = 6
cubes = [x**3 for x in range(1, end)]
print(cubes)

