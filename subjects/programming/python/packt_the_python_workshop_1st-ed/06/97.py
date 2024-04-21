import time
import functools

@functools.lru_cache(maxsize=20)
def func(x):
    time.sleep(1)
    print(f"Heavy operation for {x}")
    return x * 10


print(f"Func returned: {func(1)}")
print(f"Func returned: {func(2)}")
print(f"Func returned: {func(3)}")
print(f"Func returned: {func(4)}")
print(f"Func returned: {func(5)}")
print(f"Func returned: {func(5)}")
print(f"Func returned: {func(4)}")
print(f"Func returned: {func(3)}")
print(f"Func returned: {func(2)}")
print(f"Func returned: {func(1)}")