class Pet():
    """
    A class to capture useful information regarding pets.
    """ 

    is_human = False
    owner = "Me"    

    def __init__(self, height):
        self.height = height

    def is_tall(self):
        return self.height >= 50



bowser = Pet(40)
print(bowser.is_tall())

bowser2 = Pet(50)
print(bowser2.is_tall())