package main

import "fmt"

func main() {
	a, b := 5, 10
	fmt.Println("a: ", a, " b:", b)
	fmt.Println("&a: ", &a, " &b:", &b)
	swap(&a, &b)
	// fmt.Println(a == 10, b == 5)
	fmt.Println("a: ", a, " b:", b)
	fmt.Println("&a: ", &a, " &b:", &b)
}

func swap(a *int, b *int) {
	fmt.Println("*a: ", *a, " *b:", *b)
	fmt.Println("&a: ", &a, " &b:", &b)

	// swap values
	fmt.Println("now swap")
	*a, *b = *b, *a

	fmt.Println("*a: ", *a, " *b:", *b)
	fmt.Println("&a: ", &a, " &b:", &b)
}