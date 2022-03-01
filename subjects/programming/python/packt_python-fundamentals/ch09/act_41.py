class MyException(Exception):
	def __init__(self):
		self.message = "A MyException exception has occurred."


try:
	raise MyException
except MyException as e:
	print(e.message)

