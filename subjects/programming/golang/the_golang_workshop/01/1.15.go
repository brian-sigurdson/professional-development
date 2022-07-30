package main

import "fmt"

func add5Value(count int) {
	count += 5
	fmt.Println("add5Value: ", count)
}

func add5Ref(count *int) {
	*count = *count + 5
	fmt.Println("add5Ref: ", *count)
}

func main() {

	var count int = 0
	fmt.Println("count Before 5 value: ", count)
	add5Value(count)
	fmt.Println("count After 5 value: ", count)

	var count2 int = 0
	fmt.Println("count Before 5 ref: ", count2)
	add5Ref(&count2)
	fmt.Println("count After 5 ref: ", count2)

}