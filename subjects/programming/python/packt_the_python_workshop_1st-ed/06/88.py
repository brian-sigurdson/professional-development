import datetime as dt 

d1 = dt.datetime(2019, 2, 25, 10, 50, tzinfo=dt.timezone.utc)
d2 = dt.datetime(2019, 2, 26, 11, 20, tzinfo=dt.timezone.utc)

td = d2 - d1 
print(td.total_seconds())


d1 = dt.datetime.now(dt.timezone.utc)
print(d1)
print(d1.isoformat())