package main
import (
	"fmt"
	"errors"
)

// constants
const GOOD_CREDIT_CUTOFF = 450
const GOOD_CREDIT_INT_RATE = .15
const BAD_CREDIT_INT_RATE = .2

// user input
var creditScore int
var income float64
var loanAmt float64
var loanTerm int


func main() {
	applicantReview("Bob", 500, 1000, 1000, 24)
	applicantReview("Bob", 350, 1000, 10000, 12)
}

func applicantReview(applicant string, creditScore int, income float64, loanAmt float64, loanTerm int) {

	if err := validateInput(creditScore, income, loanAmt, loanTerm); err != nil {
		fmt.Println("Error.  Exit now.")
		return
	}

	if !isTermDivisibleBy12(loanTerm) {
		fmt.Println("Error.  Exit now.")
		return
	}

	// isGoodCredit := isGoodCredit(creditScore)	
	interestRate := getInterestRate(creditScore)
	monthlyPrinciplePayment := loanAmt / float64(loanTerm)
	monthlyInterestPayment := (loanAmt * interestRate) / float64(loanTerm)
	totalMonthlyPayment := monthlyInterestPayment + monthlyPrinciplePayment
	approved := stillGoodCredit(creditScore, totalMonthlyPayment, income)

	printResult(applicant, creditScore, income, loanAmt, loanTerm, totalMonthlyPayment, interestRate, approved)
}

func printResult(applicant string, creditScore int, income float64, loanAmt float64, loanTerm int, monthlyPayment float64, interestRate float64, approved bool) {

	fmt.Println("Applicant:\t", applicant)
	fmt.Println("----------")
	fmt.Println("Credit Scord:\t", creditScore)
	fmt.Println("Income:\t", income)
	fmt.Println("Loan Amount:\t", loanAmt)
	fmt.Println("Loan Term:\t", loanTerm)
	fmt.Println("Monthly Payment:\t", monthlyPayment)
	fmt.Println("Interest Rate:\t", interestRate * 100, "%")
	fmt.Println("Total Cost:\t", loanAmt * interestRate)
	fmt.Println("Approved:\t", approved)
	fmt.Println("")

}

func stillGoodCredit(creditScore int, totalMonthlyPayment float64, income float64) (bool) {
	percentageOfIncome := totalMonthlyPayment / float64(income)

	if isGoodCredit(creditScore) && percentageOfIncome <= .2 {
		return true
	}

	if !isGoodCredit(creditScore) && percentageOfIncome <= .1 {
		return true
	}

	return false
}

func isTermDivisibleBy12(loanTerm int) (bool) {
	return (loanTerm % 12) == 0
}

func getInterestRate(creditScore int) (float64) {
	if isGoodCredit(creditScore) {
		return GOOD_CREDIT_INT_RATE
	} else {
		return BAD_CREDIT_INT_RATE
	}
}

func isGoodCredit(creditScore int) (bool) {
	if creditScore > GOOD_CREDIT_CUTOFF {
		return true
	} else {
		return false
	}
}

func validateInput(creditScore int, income float64, loanAmt float64, loanTerm int) (error) {
	
	if creditScore < 0 || income < 0 || loanAmt < 0 || loanTerm < 0 {
		return errors.New("Some input is less than zero.")
	} else {
		return nil
	}
}