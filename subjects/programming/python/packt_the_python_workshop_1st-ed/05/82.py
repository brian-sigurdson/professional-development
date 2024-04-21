import datetime

class MyDate(datetime.date):
    def add_days(self,n):
        return self + datetime.timedelta(n)

d = MyDate(2019, 12, 1)
print(d.add_days(1))
print(d.add_days(-1))
