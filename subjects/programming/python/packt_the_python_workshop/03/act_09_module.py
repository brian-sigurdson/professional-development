def format_customer(fname, lname, location=""):
  if location == "":
    print(f"{fname} {lname}")
  else:
    print(f"{fname} {lname} ({location})")
