package main

import (
	"fmt"
	"math/rand"
	"strings"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	initial_val := rand.Intn(5)
	fmt.Println(initial_val)
	initial_val += 1
	stars := strings.Repeat("*", initial_val)
	fmt.Println(stars)
}