output "if_else_directive_name" {
  value = "Hello, %{if var.if_else_directive_name != ""}${var.if_else_directive_name}%{else} (unnamed)%{endif}"
}
