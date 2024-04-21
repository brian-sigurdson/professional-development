my_list = [2, 3, 5, 8, 11, 12, 18]

search_for = 11

slice_start = 0
slice_end = len(my_list) - 1

found = False
iterations = 0

while slice_start <= slice_end and not found:
  location = (slice_start + slice_end) // 2
  iterations += 1

  if my_list[location] == search_for:
    found = True
  else:
    if search_for < my_list[location]:
      slice_end = location - 1
    else:
      slice_start = location + 1

print(found)
print(location)
print(iterations)