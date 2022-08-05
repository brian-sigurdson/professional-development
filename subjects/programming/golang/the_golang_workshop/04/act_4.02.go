package main
import (
	"fmt"
	"os"
)

var users map[string]string

func getUsers() map[string]string {
	return map[string]string {
		"305": "Sue",
		"204": "Bob",
		"631": "Jake",
		"073": "Tracy",
	}
}

func main() {
	users = getUsers()

	// fmt.Println(os.Args)
	
	if len(os.Args) == 0 {
		fmt.Println("Missing argument")
		return
	} 
	
	if len(os.Args) > 2 {
		fmt.Println("Too many arguments")
		return
	}

	id := os.Args[1]
	fmt.Println(users[id])
}