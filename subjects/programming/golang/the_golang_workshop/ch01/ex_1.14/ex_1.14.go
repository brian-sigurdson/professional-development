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
	t := &time.Timer{}

	if count1 != nil{
		fmt.Printf("count1: %#v\n", *count1)
	} else{
		fmt.Println("count1 is nil")
	}

	if count2 != nil{
		fmt.Printf("count2: %#v\n", *count2)
	} else{
		fmt.Println("count2 is nil")
	}
	
	if count3 != nil{
		fmt.Printf("count3: %#v\n", *count3)
	} else{
		fmt.Println("count3 is nil")
	}
	
	if t != nil{
		fmt.Printf("time: %#v\n", *t)
		// fmt.Printf("time: %#v\n", t.String())
	} else{
		fmt.Println("t is nil")
	}
}