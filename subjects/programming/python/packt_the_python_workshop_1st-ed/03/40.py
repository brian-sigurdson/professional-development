my_list = [5, 8, 1, 3, 2]
search_for = 8

result = -1

for i in range(len(my_list) - 1):
  if my_list[i] == search_for:
    result = i 
    break

print(result)