package test 
import (
	"fmt"
	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/gruntwork-io/terratest/modules/http-helper"
	"testing"
) 

func TestAlbExample(t *testing.T) {
	opts := &terraform.Options{
		TerraformDir: "../examples/alb",
	}

	// terraform.Init(t, opts)
	// terraform.Apply(t, opts)
	terraform.InitAndApply(t, opt)

	// get the url of the alb
	albDnsName := terraform.OutputRequired(t, opts, "alb_dns_name")
	url := fmt.Sprintf("http://&s", albDnsName)

	// test that the alb's default action is working and returns a 404
	expectedStatus := 404
	expectedBody := "404: page not found"

	http_helper.HttpGetWithValidation(t, url, expectedStatus, expectedBody)
}