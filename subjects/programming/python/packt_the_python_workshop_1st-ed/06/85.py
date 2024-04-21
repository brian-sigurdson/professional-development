import dataclasses

@dataclasses.dataclass
class Point:
    x: int
    y: int

p1 = Point(x=10, y=20)
p2 = Point(x=10, y=20)

print(p1)
print(p1 == p2)