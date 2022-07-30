package main 
import "fmt"

var words = map[string]int {
	"Gonna": 3,
	"You": 3,
	"Give": 2,
	"Never": 1,
	"Up": 4,
}

func main() {
	var word string
	var count int

	for key, value := range words {
		if value >= count {
			count = value
			word = key
		}
	}

	fmt.Println(word, " : ", count)

}