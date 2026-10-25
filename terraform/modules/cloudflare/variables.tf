variable "account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "domain" {
  description = "Cloudflare zone and apex hostname"
  type        = string
}

variable "worker_name" {
  description = "Cloudflare Worker service name"
  type        = string
}

variable "response_store_bucket_name" {
  description = "R2 bucket used by the Vinext response store Worker"
  type        = string
}
