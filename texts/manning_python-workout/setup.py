import os

for val in range(1,51):
  if val < 10:
    dir_name = "0" + str(val)
  else:
    dir_name = str(val)

#  print(dir_name)
  os.mkdir(dir_name)

		
