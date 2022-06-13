from doctest import OutputChecker


def mysum(*numbers):
  output = 0

  for number in numbers:
    output += number

  print(f"sum = {output}")


mysum(1,2,3)

mysum(*[2,2,3])
