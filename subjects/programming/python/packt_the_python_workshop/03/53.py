import time 

stored_results = {}

def sum_to_n(n):
  start_time = time.perf_counter()
  result = 0

  for i in reversed(range(n)):
    if i + 1 in stored_results:
      print(f"Stopping sum at {str(i + 1)} because we have previously computed {i}")
      result += stored_results[i + 1]
      break
    else:
      result += i + 1
      
  stored_results[n] = result
  print(time.perf_counter() - start_time, "seconds")
  return result


print(sum_to_n(1000000))
print(sum_to_n(1000000))