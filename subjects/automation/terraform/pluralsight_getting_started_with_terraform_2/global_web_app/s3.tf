

# aws_s3_object
resource "aws_s3_object" "website_content" {
  for_each = local.website_content
  bucket   = aws_s3_bucket.web_bucket.id
  key      = each.value
  source   = "${path.root}/${each.value}"

  tags = local.common_tags
}