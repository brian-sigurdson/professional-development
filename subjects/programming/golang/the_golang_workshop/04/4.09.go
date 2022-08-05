package main
import (
	"fmt"
	"os"
)

func getPassedArgs() []string {
	var args []string
	for i := 1; i < len(os.Args); i++ {
		args = append(args, os.Args[i])
	}
	return args
}

func getLocals(extraLocals []string) []string {
	var locals []string 
	locals = append(locals, "en_US", "fr_FR")
	locals = append(locals, extraLocals...)
	return locals
}

func main() {
	locals := getLocals(getPassedArgs())
	fmt.Println("Locals to use: ", locals)
}