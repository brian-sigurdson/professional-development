class MobilePhone:
	def __init__(self, display_in, ram, os):
		self.display_in = display_in
		self.ram = ram
		self.os = os


pear_phone = MobilePhone(5.5, "3GB", "yOS 11.2")
simsun = MobilePhone(5.4, "4GB", "Cyborg 8.1")

print(f"Pear Phone: {pear_phone.display_in}, {pear_phone.ram}, {pear_phone.os}")
print(f"simsun Phone: {simsun.display_in}, {simsun.ram}, {simsun.os}")
