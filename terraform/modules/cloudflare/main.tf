
data "cloudflare_zone" "main" {
  filter = {
    name = var.domain
    account = {
      id = var.account_id
    }
  }
}

resource "cloudflare_r2_bucket" "response_store" {
  account_id = var.account_id
  name       = var.response_store_bucket_name
}

resource "cloudflare_workers_custom_domain" "apex" {
  account_id = var.account_id
  zone_id    = data.cloudflare_zone.main.id
  hostname   = var.domain
  service    = var.worker_name
}

resource "cloudflare_workers_custom_domain" "www" {
  account_id = var.account_id
  zone_id    = data.cloudflare_zone.main.id
  hostname   = "www.${var.domain}"
  service    = var.worker_name
}
