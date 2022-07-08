package test 
import (
	"fmt"
	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/gruntwork-io/terratest/modules/http-helper"
	"testing"
	"time"
) 

func TestAlbExample(t *testing.T) {
	opts := &terraform.Options{
		TerraformDir: "../examples/alb",
	}

	// clean up everything at the end of the test
	defer terraform.Destroy(t, opts)

	// no need to call these individually
	// terraform.Init(t, opts)
	// terraform.Apply(t, opts)
	// deploy the example
	terraform.InitAndApply(t, opts)

	// get the url of the alb
	albDnsName := terraform.OutputRequired(t, opts, "alb_dns_name")
	url := fmt.Sprintf("http://%s", albDnsName)
	fmt.Println(url)

	// test that the alb's default action is working and returns a 404
	expectedStatus := 404
	expectedBody := "404: page not found"
	// don't want to call this immediately
	// http_helper.HttpGetWithValidation(t, url, expectedStatus, expectedBody)

	maxRetries := 10
	timeBetweenRetries := 10 * time.Second

	http_helper.HttpGetWithRetry(t, url, expectedStatus, expectedBody, maxRetries, timeBetweenRetries)
}