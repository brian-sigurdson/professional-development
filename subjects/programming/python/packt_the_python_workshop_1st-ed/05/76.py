class Country():
    def __init__(self, name='Unspecified', population=None, size_kmsq=None):
        self.name = name
        self.population = population
        self.size_kmsq = size_kmsq

    def size_miles_sq(self, conversion_rate=0.621371):
        return self.size_kmsq * (conversion_rate ** 2)

    def __str__(self):
        if self.population:
            return f"{self.name}, population {self.population}"
        elif self.size_kmsq:
            return f"{self.name}, sqkm {self.size_kmsq}"
        else:
            return self.name


chad = Country(name = 'Chad', population = 100)
print(chad)

print(Country(name = "Test"))
