package main
import "fmt"
import "math"

func main(){
	//main course
	var total float64 = 2 * 13
	printSub("Sub: ", total)

	// drinks
	total += (4 * 2.25)
	printSub("Sub: ", total)

	// disc
	total -= 5
	printSub("Sub: ", total)

	// tip
	tip := math.Round(total * 0.1)
	printSub("Tip: ", tip)

	// total
	total += tip
	printSub("Total: ", total)

	// split
	split := total / 2
	printSub("Split: ", split)

	// reward every 5th visit
	visitCount := 24
	visitCount += 1
	remainder := visitCount % 5

	if remainder == 0 {
		fmt.Println("With this visit, you've earned a reward.")
	}
}

func printSub(msg string, total float64) {
	fmt.Println(msg, total)
}