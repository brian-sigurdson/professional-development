class Todo:
    """
    Todo represents a task with a name, description, point value, and completed.

    A new Todo should have a `completed` field that defaults to `False`.
    All other attributes must be provided.

    >>> todo = Todo(name='Get Lunch', description='Need to eat.', points=0)
    >>> print(todo)
    Get Lunch (Incomplete - 0 points): Need to eat.
    >>> todo.completed = True
    >>> print(todo)
    Get Lunch (Complete - 0 points): Need to eat.
    >>> todo2 = Todo(name='Test', description='Another todo', points=1, completed=True)
    """

    def __init__(self, name, description, points, completed=False):
        self.name = name
        self.description = description
        self.points = points
        self.completed = completed

    def is_complete(self):
        if self.completed:
            return "Complete"
        else:
            return "Incomplete"

    def __repr__(self):
        return f"{self.name} ({self.is_complete()} - {self.points} points): {self.description}"
        


class TodoList:
    """
    TodoList wraps a list of Todo objects and implements some functionality that
    utilize the information from the entire collection.

    >>> todo = Todo(name='Get Lunch', description='Need to eat', points=0, completed=True)
    >>> todo2 = Todo(name='Submit Talk Proposal', description='Write and submit talk for PyCon', points=3)
    >>> todo_list = TodoList([todo, todo2])
    >>> todo_list.average_points()
    1.5
    >>> todo_list.completed()
    [Get Lunch (Complete - 0 points): Need to eat]
    >>> todo_list.incomplete()
    [Submit Talk Proposal (Incomplete - 3 points): Write and submit talk for PyCon]
    """

    def __init__(self, the_list) -> None:
        self.the_list = the_list

    def average_points(self):
        total = 0
        avg = 0.0

        for val in self.the_list:
            total += val.points

        print(total / len(self.the_list))

    def completed(self):
        my_list = []
        for val in self.the_list:
            if val.completed:
                my_list.append(val)
        print(my_list)

    def incomplete(self):
        my_list = []
        for val in self.the_list:
            if not val.completed:
                my_list.append(val)
        print(my_list)
