# resource "cloudflare_ruleset" "portfolio_waf" {
#   zone_id     = data.cloudflare_zone.main.id
#   name        = "Portfolio custom WAF"
#   description = "Blocks common automated probes for sensitive files and admin endpoints"
#   kind        = "zone"
#   phase       = "http_request_firewall_custom"

#   rules = [{
#     ref         = "block_common_scanner_paths"
#     description = "Block probes for secrets, source control, and unused admin panels"
#     expression  = "(http.request.uri.path contains \"/.env\" or http.request.uri.path contains \"/.git\" or http.request.uri.path contains \"/wp-admin\" or http.request.uri.path contains \"/wp-login.php\" or http.request.uri.path contains \"/phpmyadmin\")"
#     action      = "block"
#     enabled     = true
#   }]
# }
