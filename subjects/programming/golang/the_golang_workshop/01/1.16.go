package main
import "fmt"

const GLOBAL_LIMIT = 100
const MAX_CACHE_SIZE = 10 * GLOBAL_LIMIT

const (
	CACHE_KEY_BOOK = "book_"
	CACHE_KEY_CD = "cd_"
)

var cache map[string]string

func cacheSet(key string, val string) {
	if len(cache) + 1 >= MAX_CACHE_SIZE {
		return
	}
	cache[key] = val 
}

func SetBook(isbn string, name string) {
	cacheSet(CACHE_KEY_BOOK + isbn, name)
}

func SetCD(sku string, title string) {
	cacheSet(CACHE_KEY_CD + sku, title)
}

func cacheGet(key string) string {
	return cache[key]
}

func GetBook(isbn string) string {
	return cacheGet(CACHE_KEY_BOOK + isbn)
}

func GetCD(sku string) string {
	return cacheGet(CACHE_KEY_CD + sku)
}

func main() {
	cache = make(map[string]string)

	SetBook("1234-5678", "Get Ready To Go")
	SetCD("1234-5678", "Get Ready to Go Audio Book")

	fmt.Println("Book: ", GetBook("1234-5678"))
	fmt.Println("CD: ", GetCD("1234-5678"))
}