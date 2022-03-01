class Cat:
	def __init__(self, mass, lifespan, speed):
		self.mass_in_kg = mass
		self.lifespan_in_years = lifespan
		self.speed_in_kph = speed

	def vocalize(self):
		print("Chuff")

	def __str__(self):
		return f"Class: {type(self).__name__.lower()}\n" \
				f"Mass: {self.mass_in_kg}\n" \
				f"Lifespan: {self.lifespan_in_years}\n" \
				f"Speed: {self.speed_in_kph}"

class Cheetah(Cat):
	def __init__(self, mass, lifespan, speed):
		super().__init__(mass, lifespan, speed)
		self.spotted_coat = True

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
	print(val)

for val in my_cats:
	val.vocalize()
