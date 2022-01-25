class Cat:
	def __init__(self, mass, lifespan, speed):
		self.mass_in_kg = mass
		self.lifespan_in_years = lifespan
		self.speed_in_kph = speed

	def vocalize(self):
		print("Chuff")

	def print_facts(self):
		print(f"Class: {type(self).__name__.lower()}")
		print(f"Mass: {self.mass_in_kg}")
		print(f"Lifespan: {self.lifespan_in_years}")
		print(f"Speed: {self.speed_in_kph}")

class Cheetah(Cat):
	def vocalize(self):
		print("Chirrup")

class Lion(Cat):
	def vocalize(self):
		print("ROAR")

class Leopard(Cat):
	def vocalize(self):
		print("Roar")


cat = Cat(10, 20, 30)
cheetah = Cheetah(11, 12, 13)
lion = Lion(21, 22, 23)
leopard = Leopard(31, 32, 33)

my_cats = [cat, cheetah, lion, leopard]

for val in my_cats:
	val.print_facts()

for val in my_cats:
	val.vocalize()
