// this activity seems to be out of order

package main
import (
	"fmt"
	"os"
	"string"
)


type local struct {
	lang string
	region string		
}

func getLocales() map[local]struct{} {
	supportedLocals := make(map[local]struct{}, 5)

	supportedLocals[locale{"en", "US"}] = struct{}{}
	supportedLocals[locale{"en", "CN"}] = struct{}{}
	supportedLocals[locale{"fr", "CN"}] = struct{}{}
	supportedLocals[locale{"fr", "FR"}] = struct{}{}
	supportedLocals[locale{"ru", "RU"}] = struct{}{}

	return supportedLocals
}

func localeExists(myloc locale) bool {
	_, exists := getLocales()[myloc]
	return exists
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("No locale passed")
	}

	localeParts := strings.Split(os.Args[1], "_")
	if len(localeParts) != 2 {
		fmt.Printf("Invalid locale passed: %v\n", os.Args[1])
		os.Exit(1)
	}

	passedLocale := locle {
		lang: localeParts[0],
		region: localeParts[1],
	}

	if !localeExists(passedLocale) {
		fmt.Printf("Locale not supported: %v\n", os.Args[1])
		os.Exit(1)
	}

	fmt.Println("locale passed is supported")
}