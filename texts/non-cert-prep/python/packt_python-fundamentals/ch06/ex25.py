dict1 = dict(state="NY", city="New York")

# throws error
# print(dict1['age'])
print(dict1.get('state'))
print(dict1.get('age'))
print(dict1.get('age', 'key "age" is not defined'))
