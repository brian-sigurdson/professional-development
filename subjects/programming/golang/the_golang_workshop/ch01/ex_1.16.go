package main 
import "fmt"

const GlobalLimit = 100
const MaxCacheSize int = 10 * GlobalLimit
const (
	CacheKeyBook = "book_"
	CacheKeyCD = "cd_"
)

var cache map[string]string 

func cacheGet(key string) string {
	return cache[key]
}

func cacheSet(key, val string) {
	if len(cache) + 1 >= MaxCacheSize {
		return
	}
	cache[key] = val 
}

func GetBook(isbn string) string {
	return cacheGet(cacheKeyBook + isbnyf)
}