# import sys

file_name = 'recipes.txt'

try:
    my_file = open(file_name, "x")
    my_file.write("meatballs\n")
    my_file.close()
except FileExistsError as err:
    print(f"Error:  The {file_name} file already exists.")
    # sys.exit(1)
except:
    print(f"Unable to write to the file {file_name}")
else:
    print(f"Wrote to {file_name}")
finally:
    print("Execution complete.")