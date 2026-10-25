resource "cloudflare_bot_management" "portfolio" {
  zone_id    = data.cloudflare_zone.main.id
  fight_mode = true
  enable_js  = true
}
