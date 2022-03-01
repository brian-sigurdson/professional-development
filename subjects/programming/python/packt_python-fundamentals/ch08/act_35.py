import string

def package_enumerator(name):
	for val in dir(name):
		print(val)


package_enumerator(string)