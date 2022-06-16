package main

import "fmt"

func add5Value(count int) {
	count += 5
	fmt.Println("add5Value:", count)
}

func add5Point(count *int) {
	*count += 5
	fmt.Println("add5Point:", *count)
}

func main() {
	var count int = 5
	count += 5
	fmt.Println("add5Value pre:", count)
	add5Value(count)
	fmt.Println("add5Value post:", count)
	fmt.Println("add5Point pre:", count)
	add5Point(&count)
	fmt.Println("add5Point post:", count)
}