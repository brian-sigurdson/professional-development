class Polygon():
    """This is the Polygon class"""

    def __init__(self, num_of_sides, length_of_sides):
        self.num_of_sides = num_of_sides
        self.length_of_sides = length_of_sides

    @property
    def num_sides(self):
        return self.num_of_sides

    @property
    def perimeter(self):
        return self.num_sides * self.length_of_sides

    def __str__(self):
        return f"{self.__class__.__name__} with {self.num_sides} sides."


a = Polygon(4, 1)
print(a.perimeter)



class Rectangle(Polygon):
    def __init__(self, height, width):
        self.height = height
        self.width = width

    @property
    def area(self):
        return .5 * self.height * self.width


# class Square(Polygon):
#     def __init__(selfval1):
#         self.val1 = val1