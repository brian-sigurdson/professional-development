package main
import "fmt"

var item = []string {"Cake", "Milk", "Butter"}
var cost = []float64 {.99, 2.75, .87}
var rate = []float64 {.075, .015, .02}

func main() {
	total := 0.0

	for index, value := range item{
		total += calculator(cost[index], rate[index])
		fmt.Println(value, "\t", cost[index], "\t", rate[index] )
	}

	fmt.Println("Sales Tax Total: ", total)
}

func calculator(cost float64, rate float64) (float64) {
	return cost * rate
}