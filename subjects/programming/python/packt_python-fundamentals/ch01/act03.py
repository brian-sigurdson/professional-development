dist_km = 150
time_hrs = 2

dist_miles = dist_km / 1.6
dist_meters = dist_km / 1000
time_seconds = time_hrs / 60
speed_km_hr = dist_km / time_hrs
speed_miles_hr = dist_miles / time_hrs
speed_meters_hr = dist_meters / time_hrs
speed_meters_sec = speed_meters_hr / (60*60)

print(f"The speed in kilometers per hour is: {speed_km_hr}")
print(f"The speed in miles per hour is: {speed_miles_hr}")
print(f"The speed in meters per second is: {speed_meters_sec}")
