class Person():
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


class Baby(Person):
    def speak(self):
        print("blah blah")


class Adult(Person):
    def speak(self):
        print(f"Hello, my name is {self.first_name}")


jess = Baby("Jess", "McDonald")
tom = Adult("Tom", "Smith")

jess.speak()
tom.speak()

