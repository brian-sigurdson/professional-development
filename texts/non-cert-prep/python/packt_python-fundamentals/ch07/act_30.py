class Elevator:
	max_occupants = 8

	def __init__(self, occupants):
		self.occupants = occupants

		if self.occupants > Elevator.max_occupants:
			print(f"The maximum occupancy limit has been exceeded.  "
			      f"{self.occupants - Elevator.max_occupants} occupants must exit the elevator.")


el1 = Elevator(6)
print(f"Elevator 1 occupants: {el1.occupants}")
el2 = Elevator(10)
print(f"Elevator 2 occupants: {el2.occupants}")
