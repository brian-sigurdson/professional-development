class Person():
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    @property
    def full_name(self):
        return self.fname + " " + self.lname

customer = Person("Mary", "Smith")
print(customer.full_name)