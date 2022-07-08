def list_products(mylist):
  result = 1
  for number in mylist:
    result *= number
  return result


print(list_products([2,3]))
print(list_products([2,10,15]))
