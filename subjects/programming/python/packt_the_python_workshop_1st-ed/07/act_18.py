players = ['Magnus', 'Fabian', 'Yifan', 'Wenjun']
print( [f"[{player1} vs {player2}" for player1 in players for player2 in players if player1 != player2])