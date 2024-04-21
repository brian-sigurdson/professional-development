import re

names = ['Xander Harris', 'Jennifer Smith', 'Timothy Jones', 'Amy Alexandrescu', 'Peter Price', 'Weifung Xu']

pattern = "[Xx]"

winners = [name for name in names if re.search(pattern, name)]

print(winners)
