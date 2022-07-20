import subprocess
import os

result = subprocess.run(
    ["env"],
    capture_output=True,
    text=True,
    env={**os.environ, "SERVER": "OTHER_SERVER"}
)

print(result.stdout)
myenv = result.stdout.split("\n")
for val in myenv:
    print(val)