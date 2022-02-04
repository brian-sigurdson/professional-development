package main
import "fmt"
import "errors"

type user struct {
	name string
	credit_score int
	income float64
	loan_amt float64
	loan_term int
	monthly_payment float64
	rate float32
	total_cost float64
	approved bool
}

func main() {
	// applicant 1
	app1 := user{
		name: "Applicant 1",
		credit_score: 500,
		income: 1000,
		loan_amt: 1000,
		loan_term: 24,
		monthly_payment: 47.916666666664,
		rate: 0,
		total_cost: 0,
		approved: false,
	}
		// applicant 2
	app2 := user{
		name: "Applicant 2",
		credit_score: 350,
		income: 1000,
		loan_amt: 10000,
		loan_term: 12,
		monthly_payment: 1000,
		rate: 0,
		total_cost: 0,
		approved: false,
	}

	applicants := []user{app1, app2}

	for i := 0; i < len(applicants); i++ {
		
		err := calculator(&applicants[i])

		if err != nil {
			fmt.Println(err)
		}
	}

	for index, theApplicant := range applicants {
		printApplicant(index, theApplicant)
		fmt.Println("")
	}

	// fmt.Printf("width3: |%-6.2f|%-6.2f|\n", 1.2, 3.45)
	// fmt.Printf("width4: |%-6s|%-6s|\n", "foo", "b")
}

func calculator(applicant *user) (error) {

	// check for bad values
	if applicant.credit_score < 0 || applicant.income < 0 || applicant.loan_amt < 0 || applicant.loan_term < 0 {
		return errors.New("Credit Score, Monthly Income, Loan Amount, and Loan Term must all be greater than zero.")
	}

	if applicant.loan_term % 12 != 0 {
		return errors.New("Term must be divisible by 12.")
	}

	if applicant.monthly_payment / applicant.income <= .2 && applicant.credit_score > 450 {
		applicant.rate = 15
		applicant.approved = true		
	} else {
		applicant.rate = 20
		applicant.approved = false
	}

	applicant.total_cost = applicant.loan_amt * float64(applicant.rate/100)

	return nil

}

func printApplicant(index int, applicant user) {
	fmt.Println("Applicant ", index + 1)
	fmt.Println("----------")
	fmt.Printf("Credit Score  : %-20v\n", applicant.credit_score)
	fmt.Printf("Income  : %-20v\n", applicant.income)
	fmt.Printf("Loan Amount  : %-20v\n", applicant.loan_amt)
	fmt.Printf("Loan Term  : %-20v\n", applicant.loan_term)
	fmt.Printf("Monthly Payment  : %-20v\n", applicant.monthly_payment)
	fmt.Printf("Rate  : %-20v\n", applicant.rate)
	fmt.Printf("Total Cost  : %-20v\n", int(applicant.total_cost))
	fmt.Printf("Approved  : %-20v\n", applicant.approved)
}