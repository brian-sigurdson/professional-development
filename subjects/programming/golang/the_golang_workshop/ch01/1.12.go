package main

import (
	"fmt"
	"time"
)

func main() {
	var count int
	fmt.Printf("count : %#v \n", count)

	var discount float64
	fmt.Printf("discount : %#v \n", discount)

	var debug bool
	fmt.Printf("debug : %#v \n", debug)

	var message string
	fmt.Printf("message : %#v \n", message)

	var emails []string
	fmt.Printf("emails : %#v \n", emails)

	var startTime time.Time 
	fmt.Printf("startTime : %#v \n", startTime)
}