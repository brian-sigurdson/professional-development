"""
A module to import the current system time.
"""

import datetime

def get_time():
  return datetime.datetime.now()

if __name__ == '__main__':
  print(get_time())