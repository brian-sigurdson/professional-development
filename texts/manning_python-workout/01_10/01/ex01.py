import random

def guessing_game():
  lower_bound = 0
  upper_bound = 100
  random_value = random.randint(lower_bound, upper_bound + 1)
  tries = 3

  print(f"You have {tries} tries to guess the correct value between {lower_bound} and {upper_bound}")
  while true:
    try{
      guess = input(f"Guess a number between {lower_bound} and {upper_bound}.")
    } catch
