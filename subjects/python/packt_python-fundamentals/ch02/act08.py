total_days = int(input("Number of days: "))

years, remainder = divmod(total_days, 365)
weeks, remainder = divmod(remainder, 7)
days, remainder = divmod(remainder, 1)

print(f"Years: {years}")
print(f"Weeks: {weeks}")
print(f"Days:  {days}")