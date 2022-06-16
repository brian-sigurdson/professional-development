package main 
import "fmt"

func swap(a *int, b *int) {
	*a, *b = *b, *a
}

func main() {
	a, b := 5, 10
	fmt.Println("a: ", a)
	fmt.Println("b:", b)

	swap(&a, &b)
	
	fmt.Println("a: ", a)
	fmt.Println("b:", b)
}