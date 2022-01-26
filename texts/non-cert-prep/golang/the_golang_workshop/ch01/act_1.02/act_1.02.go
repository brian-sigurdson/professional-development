package main
import "fmt"

func main() {
	a, b := 5, 10
	fmt.Println("Before swap: a = ", a)
	fmt.Println("Before swap: b = ", b)

	// call swap here
	swap(&a, &b)

	fmt.Println("After swap: a = ", a)
	fmt.Println("After swap: b = ", b)

	fmt.Println(a == 10, b == 5)
}

func swap(a *int, b *int) {
	//swap values here
	// tmp := *a
	// *a = *b
	// *b = tmp

	// ha!  I though that this was possible.
	// I just wasn't doing it correctly
	*a, *b = *b, *a 
}
