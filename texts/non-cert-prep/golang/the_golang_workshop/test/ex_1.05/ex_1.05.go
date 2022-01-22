package main

import "fmt"
import "time"

func main() {
	debug := false
	logLevel := "info"
	startUpTime := time.Now()

	fmt.Println(debug, logLevel, startUpTime)
}
