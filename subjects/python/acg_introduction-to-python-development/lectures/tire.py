import math

class Tire:
    """
    Tire represents a tire that would be used with an automobile
    """

    def __init__(self, tire_type, width, ratio, diameter, brand = '', construction = 'R') -> None:
        self.tire_type = tire_type
        self.width = width
        self.ratio = ratio
        self.diameter = diameter
        self.brand = brand
        self.construction = construction

    def __repr__(self) -> str:
        """
        Represents the tire's information in the standard notation present
        on the side of the car.  Example:  'P215/65R15'
        """

        return (f"{self.tire_type}{self.width}/{self.ratio}{self.construction}{self.diameter}")
        
    def circumference(self):
        """
        The circumference of the tire in inches.

        >>> tire = Tire('P', 205, 65, 15)
        >>> tire.circumference()
        80.1
        """

        total_diameter = self._side_wall_inches() * 2 + self.diameter
        return round(total_diameter * math.pi, 1)

    def _side_wall_inches(self):
        return (self.width * (self.ratio / 100)) / 25.4


class SnowTire(Tire):
    def __init__(self, tire_type, width, ratio, diameter, chain_thickness, brand='', construction='R') -> None:
        super().__init__(tire_type, width, ratio, diameter, brand=brand, construction=construction)
        self.chain_thickness = chain_thickness

    def circumference(self):
        """
        The circumference of a tire with snow chains in inches.

        >>> tire = SnowTire('P', 205, 65, 15, 2)
        >>> tire.circumference()
        92.7
        """
        total_diameter = (self._side_wall_inches() + self.chain_thickness) * 2 + self.diameter
        return round(total_diameter * math.pi, 1)
        
    def __repr__(self) -> str:
        return super().__repr__() + " (Snow)"