import math

class Circle:
	def __init__(self, radius):
		self.radius = radius

	def area(self):
		return math.pi * math.pow(self.radius, 2)

	def circumference(self):
		return 2 * math.pi * self.radius


radius = int(input("Enter the radius: "))

circle = Circle(radius)
print(f"The circumference is {circle.circumference()}")
print(f"The area is {circle.area()}")