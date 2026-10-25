output "zone_id" {
  description = "Cloudflare zone ID resolved from the domain"
  value       = data.cloudflare_zone.main.id
}

output "apex_hostname" {
  description = "Portfolio apex custom domain"
  value       = cloudflare_workers_custom_domain.apex.hostname
}

output "www_hostname" {
  description = "Portfolio www custom domain"
  value       = cloudflare_workers_custom_domain.www.hostname
}

output "response_store_bucket_name" {
  description = "R2 bucket used by the response store Worker"
  value       = cloudflare_r2_bucket.response_store.name
}
