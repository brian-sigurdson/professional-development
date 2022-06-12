package main
import "fmt"

func main_course() (float64) {
	var total float64 = 2 * 13
	return total
}

func drinks() (float64) {
	var total float64 = 4 * 2.25
	return total
}

func main() {
	// main course
	var main_course = main_course()
	var drinks = drinks()
	var sub_total = main_course + drinks

	fmt.Println("main course: ", main_course)
	fmt.Println("drinks: ", drinks)
	fmt.Println("Sub: ", sub_total)

	// discount
	discount := 5.0
	fmt.Println("discount	: ", discount)

	sub_total -= discount
	fmt.Println("Sub: ", sub_total)

	// 10% tip
	tip := sub_total * 0.1
	fmt.Println("Tip: ", tip)

	total := sub_total + tip 
	fmt.Println("total: ", total)

	// split bill
	split := total / 2
	fmt.Println("split: ", split)

	// reward every 5th visit
	visit_count := 24
	visit_count++
	remainder := visit_count % 5

	if remainder == 0 {
		fmt.Println("With this visit you have earned a reward.")
	}

}