class Circle():
    is_shape = True 

    def __init__(self, radius, color):
        self.radius = radius
        self.color = color 

first = Circle(2, 'blue')
second = Circle(3, 'red')

print(first.color)
print(first.is_shape)
print(second.color)

