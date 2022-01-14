sentence = input("Sentence: ").lower()

word = input("Word: ").lower()

count = sentence.count(word)

print(f"There are {count} occurrences of {word} in the sentence '{sentence}'.")
