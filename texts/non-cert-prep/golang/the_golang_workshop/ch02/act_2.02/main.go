package main
import "fmt"

func main() {
	config := map[string]int {
		"Gonna": 3,
		"You": 3,
		"Give": 2,
		"Never": 1,
		"Up": 4,
	}

	var max_value int = -1
	var max_word string = ""

	for key, value := range config {
		if value >= max_value {
			max_value = value
			max_word = key
		}
	}

	fmt.Println("Most popular word: ", max_word)
	fmt.Println("With a count of : ", max_value)
}