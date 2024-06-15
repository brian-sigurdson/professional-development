locals {
  common_tags = {
    company      = var.company
    project      = "${var.company}-${var.project}"
    billing_code = var.billing_code
    env          = var.environment
  }

  # I would have put this sort of manipulation directly in the bucket resource, 
  # so that it is easy to find by users. 
  #
  # If I were new to the code, I would go to the bucket resource if I 
  # wanted to know anything about the bucket and I would get the name
  # from the bucket in my code as well.
  s3_bucket_name = lower("name-bks-${local.naming_prefix}-${random_integer.s3.result}")

  # I would create a var, but I think he's trying to show diff approached
  website_content = {
    website = "website/index.html"
    logo    = "website/Globo_logo_Vert.png"
  }

  naming_prefix = "${var.naming_prefix}-${var.environment}"

  toppings = ["cheese", "lettuce", "salsa"]
  better = {
    item1 = "cheese"
    item2 = "lettuce"
    item3 = "salse"
  }
}

resource "random_integer" "s3" {
  min = 10000
  max = 99999
}