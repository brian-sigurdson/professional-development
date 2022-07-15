class Pet():
    """
    A class to capture useful information regarding pets.
    """ 

    is_human = False
    owner = "Me"


chubbles = Pet()
print(chubbles.is_human)
print(chubbles.owner)
print(chubbles.__doc__)
