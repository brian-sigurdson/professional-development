package main

import (
	"fmt"
)

func main() {
	// item_name := []string{"cake", "milk", "butter"}
	item_cost := []float64{.99, 2.75, .87}
	item_str  := []float64{.075, .015, .02}
	total_tax := 0.0

	for i := 0; i < len(item_cost); i++ {
		total_tax += getSalesTax(item_cost[i], item_str[i])
	}

	fmt.Println("Sales Tax Total: ", total_tax)
	
}

func getSalesTax(cost float64, taxRate float64) float64 {
	return cost * taxRate
}