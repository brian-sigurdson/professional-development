class Person:
	pass


print(type(Person))

jack = Person()
jill = Person()

print(jack is jill)

jack2 = jack

print(jack2 is jack)