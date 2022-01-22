class Person:
	def __init__(self, name, age, height_cm):
		self.name = name
		self.age = age
		self.height_cm = height_cm


p1 = Person("Cubert", 62, 180)
print(p1.name, p1.age, p1.height_cm)
