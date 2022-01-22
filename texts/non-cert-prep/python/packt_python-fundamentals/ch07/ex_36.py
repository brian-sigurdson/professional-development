class Person:
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def speak(self):
		print(f"Hello!  My name is {self.name}.  I am {self.age} years old.")

	def greet(self, person):
		if person.name == 'Roger':
			print("Hi neighbor!")
		else:
			print(f"Pleased to meet you {person.name}")

	def birthday(self):
		self.age += 1

	def __str__(self):
		return f"Name: {self.name}\nAge: {self.age}"


diana = Person("Diana", 31)
print(diana)
print(diana.birthday())
