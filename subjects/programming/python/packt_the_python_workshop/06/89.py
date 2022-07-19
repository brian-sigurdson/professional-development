import datetime as dt 
import time 

time_now = time.time()
datetime_now = dt.datetime.now(dt.timezone.utc)

epoc = datetime_now - dt.timedelta(seconds=time_now)
print(epoc) 

