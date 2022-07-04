my_list = [5, 8, 1, 3, 2]
still_swapping = True

print(my_list)

while still_swapping:
  still_swapping = False

  for i in range(len(my_list) - 1):
    if my_list[i] > my_list[i + 1]:
      my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]
      still_swapping = True

print(my_list)