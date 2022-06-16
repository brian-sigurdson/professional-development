package main

import (
	"fmt"
	"time"
)

func main() {
	var count1 *int
	count2 := new(int)
	countTemp := 5
	count3 := &countTemp
	t := &time.Time{}

	fmt.Print("count1: %#v\n", count1)
	fmt.Print("count2: %#v\n", count2)
	fmt.Print("count3: %#v\n", count3)
	fmt.Print("time: %#v\n", t)
}