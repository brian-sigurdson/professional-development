try:
	with open('input.txt', 'r') as f:
		for line in f:
			print(line)
			print("Execution never gets here.")
except FileNotFoundError:
	print("FileNotFoundError occurred.")
except ValueError:
	print("ValueError occurred.")
except Exception:
	print("Some other error occurred.")
else:
	print("No exceptions occurred.")
finally:
	print("I will always print.")

print("Execution continues here.")