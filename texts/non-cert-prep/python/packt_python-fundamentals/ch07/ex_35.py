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


joe = Person("Joe", 31)
sue = Person("Sue", 32)
roger = Person("Roger", 33)

joe.speak()
sue.speak()
joe.greet(sue)
sue.greet(joe)

joe.greet(roger)