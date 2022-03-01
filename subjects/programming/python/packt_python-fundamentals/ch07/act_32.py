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

class Tiger(Cat):
	def __init__(self, mass, lifespan, speed):
		super().__init__(mass, lifespan, speed)
		self.coat_pattern = "stripped"

	def vocalize(self):
		print("Chirrup")

	def __str__(self):
		return super().__str__() + f"\nIt also has a {self.coat_pattern} coat."


tiger = Tiger(10, 20, 30)
print(tiger)

