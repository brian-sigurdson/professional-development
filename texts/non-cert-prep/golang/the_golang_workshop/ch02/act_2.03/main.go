package main
import "fmt"

func main() {
	nums := []int{5,8,2,4,0,1,3,7,9,6}
	fmt.Println("Before: ", nums)

	for swapped := false; !swapped; {

		// iterate over the list and check for values to swap
		for i := 1; i < len(nums); i++ {
			if nums[i -1 ] > nums[i] {
				nums[i - 1], nums[i] = nums[i], nums[i - 1]
				swapped = true
			}
		}

		if !swapped {
			// then no elements were swapped => we're done
			break
		} else {
			// at least one element was swapped, so go over the list again
			swapped = false
		}
	}

	fmt.Println("After : ", nums)

}