print([x*y for x in ['spam', 'eggs', 'chips'] for y in [1,2,3]])

print([x*y for x in [1,2,3] for y in ['spam', 'eggs', 'chips']])

number = [1,2,3]
print([x*y for x in number for y in number])
