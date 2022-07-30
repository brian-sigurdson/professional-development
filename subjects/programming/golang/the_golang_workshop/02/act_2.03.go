package main 
import "fmt"

var nums = []int {9,8,7,6,5,4,3,2,1}

func main() {
	fmt.Println(nums)

	stop := false
	for !stop {
		
		changed := false

		for i := 1; i < len(nums); i++ {
			if nums[i-1] > nums[i] {
				nums[i-1], nums[i] = nums[i], nums[i-1]

				// signal to do again
				changed = true
			}
		}

		if changed == false {
			// we traversed the whole array and did not make a swap => we're done
			stop = true
		}
	}

	fmt.Println(nums)
}

