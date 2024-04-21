import re

title = "And now for something completely different"
pattern = "(\w)\\1+"

print(re.search(pattern, title))
