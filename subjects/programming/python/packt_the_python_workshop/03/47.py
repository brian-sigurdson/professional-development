def convert_usd_to_aud(amount, rate=.80):
  return amount / rate 


def convert_and_sum_list(usd_list, new_rate=.75):
  total = 0
  for amount in usd_list:
    total += convert_usd_to_aud(amount, rate=new_rate)
  return total 

def convert_and_sum_list_kwargs(usd_list, **kwargs):
  
  print(kwargs)

  for key in kwargs:
    print(key)

  total = 0
  for amount in usd_list:
    total += convert_usd_to_aud(amount, rate=kwargs['rate'])
  
  return total

print(convert_and_sum_list_kwargs([1,3], rate=0.8, a=1, b=2, c=3))
print("-----")
print(convert_and_sum_list_kwargs([1,3], rate=0.8))



# print(convert_and_sum_list([1,3]))
# print(convert_and_sum_list([100]))
# print(convert_and_sum_list([100,100]))
