def avg(marks):
    assert len(marks) != 0, "Cannot be zero length"
    return round(sum(marks) / len(marks), 2)

sem1_marks = [62, 65, 75]
print(f"Average marks for semester 1: {avg(sem1_marks)}")

sem1_marks = []
print(f"Average marks for semester 1: {avg(sem1_marks)}")