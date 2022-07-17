import random


class Pet():
    """
    A class to capture useful information regarding pets.
    """ 

    is_human = False
    owner = "Me"  

    @classmethod
    def owned_by_smith_family(cls):
        return 'smith' in cls.owner  

    @classmethod
    def create_random_height_pet(cls):
        height = random.randrange(0, 100)
        return cls(height)

    def __init__(self, height):
        self.height = height

    def is_tall(self):
        return self.height >= 50



for i in range(5):
    pet = Pet.create_random_height_pet()
    print(pet.height)