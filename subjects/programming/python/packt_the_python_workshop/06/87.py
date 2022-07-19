import datetime
from dateutil import tz

d1 = datetime.datetime(1989, 4, 24, hour=11, tzinfo=tz.gettz("Europe/Madrid"))
d2 = datetime.datetime(1989, 4, 24, hour=8, tzinfo=tz.gettz("America/Los_Angeles"))

print(d1)
print(d2)

print(d1.hour > d2.hour)
print(d1 > d2)

d2_madrid = d2.astimezone(tz.gettz("Europe/Madrid"))
print(d2_madrid)
print(d2_madrid.hour)

