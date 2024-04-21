import platform
import os
import sys 

print("PID: ", os.getpid())
print("Parent PID:", os.getppid())

print("Machine network name: ", platform.node())
print("Python version: ", platform.python_version())
print("System: ", platform.system())

print("Python module lookup path: ", sys.path)
print("Command to run Python: ", sys.argv)

print("USER env var: ", os.environ["USER"])
