package main
import (
	"fmt"
	// "os"
)

func getUsers() map[string]string {
	return map[string]string {
		"305": "Sue",
		"204": "Bob",
		"631": "Jake",
		"073": "Tracy",
	}
}

func deleteUser(theMap map[string]string, id string) {
	delete(theMap, id)
}

func main() {
	users := getUsers()
	fmt.Println(users)
	deleteUser(users, "305")
	fmt.Println(users)
}