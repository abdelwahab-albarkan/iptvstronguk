import os

map_content = """# URL-to-URL Redirection & Migration Mapping

**Project:** AuraStream UK (Production Project: `shortiptv`)  
**Target Domain:** Configurable in `site.config.json` (Currently: `https://iptvott8ktv.com`)  
**Status:** Pre-Launch Migration Blueprint  

---

## 1. Internal Legacy to New URL Mapping

| Legacy / Prior URL Path | Target Production URL Path | HTTP Status | User Intent & Rationale |
| :--- | :--- | :--- | :--- |
| `/` | `/` | 200 OK | Core Homepage & Hub |
| `/home/` | `/` | 301 Permanent | Canonicalization consolidation |
| `/index.html` | `/` | 301 Permanent | Canonicalization consolidation |
| `/help/` | `/help/` | 200 OK | Knowledge Base & Help Hub |
| `/help-centre/` | `/help/` | 301 Permanent | URL naming normalization |
| `/help/restart-device-and-router/` | `/help/restart-device-and-router/` | 200 OK | Maintained verbatim |
| `/help/restart/` | `/help/restart-device-and-router/` | 301 Permanent | User friendly alias |
| `/help/firestick/` | `/help/setup-firestick/` | 301 Permanent | Exact-match target |
| `/setup/firestick/` | `/help/setup-firestick/` | 301 Permanent | Legacy silo consolidation |
| `/help/smart-tv/` | `/help/setup-smart-tv/` | 301 Permanent | Exact-match target |
| `/setup/smart-tv/` | `/help/setup-smart-tv/` | 301 Permanent | Legacy silo consolidation |
| `/help/android/` | `/help/setup-android-tv/` | 301 Permanent | Exact-match target |
| `/setup/android-tv/` | `/help/setup-android-tv/` | 301 Permanent | Legacy silo consolidation |
| `/help/apple/` | `/help/setup-apple-tv/` | 301 Permanent | Exact-match target |
| `/setup/apple-tv/` | `/help/setup-apple-tv/` | 301 Permanent | Legacy silo consolidation |
| `/help/tivimate/` | `/help/setup-tivimate/` | 301 Permanent | Exact-match target |
| `/setup/tivimate/` | `/help/setup-tivimate/` | 301 Permanent | Legacy silo consolidation |
| `/help/smarters/` | `/help/setup-iptv-smarters/` | 301 Permanent | Exact-match target |
| `/setup/iptv-smarters/` | `/help/setup-iptv-smarters/` | 301 Permanent | Legacy silo consolidation |
| `/help/buffering/` | `/help/fix-buffering-issues/` | 301 Permanent | Exact-match target |
| `/help/uk-isp/` | `/help/uk-isp-broadband-troubleshooting/` | 301 Permanent | Exact-match target |
| `/help/virgin-media/` | `/help/uk-isp-broadband-troubleshooting/` | 301 Permanent | Specific ISP consolidation |
| `/help/bt-broadband/` | `/help/uk-isp-broadband-troubleshooting/` | 301 Permanent | Specific ISP consolidation |
| `/help/sky-broadband/` | `/help/uk-isp-broadband-troubleshooting/` | 301 Permanent | Specific ISP consolidation |
| `/about/` | `/about/` | 200 OK | Maintained verbatim |
| `/about-us/` | `/about/` | 301 Permanent | Slug normalization |
| `/contact/` | `/contact/` | 200 OK | Maintained verbatim |
| `/contact-us/` | `/contact/` | 301 Permanent | Slug normalization |
| `/privacy/` | `/privacy/` | 200 OK | Maintained verbatim |
| `/privacy-policy/` | `/privacy/` | 301 Permanent | Slug normalization |
| `/terms/` | `/terms/` | 200 OK | Maintained verbatim |
| `/terms-and-conditions/` | `/terms/` | 301 Permanent | Slug normalization |

---

## 2. Server Implementation Rules

### Nginx Redirect Configuration (`nginx.conf`):
```nginx
# Canonical Domain & HTTPS Enforcement
server {
    listen 80;
    listen [::]:80;
    server_name _;
    return 301 https://$host$request_uri;
}

# 301 Permanent Migration Rules
location = /home/ { return 301 /; }
location = /index.html { return 301 /; }
location = /about-us/ { return 301 /about/; }
location = /contact-us/ { return 301 /contact/; }
location = /privacy-policy/ { return 301 /privacy/; }
location = /terms-and-conditions/ { return 301 /terms/; }
location = /help/firestick/ { return 301 /help/setup-firestick/; }
location = /setup/firestick/ { return 301 /help/setup-firestick/; }
location = /help/smart-tv/ { return 301 /help/setup-smart-tv/; }
location = /help/tivimate/ { return 301 /help/setup-tivimate/; }
location = /help/smarters/ { return 301 /help/setup-iptv-smarters/; }
location = /help/buffering/ { return 301 /help/fix-buffering-issues/; }
location = /help/uk-isp/ { return 301 /help/uk-isp-broadband-troubleshooting/; }
```

### Cloudflare Redirect Rules (Bulk Redirects JSON syntax):
```json
[
  { "source": "/about-us/", "target": "/about/", "status": 301 },
  { "source": "/contact-us/", "target": "/contact/", "status": 301 },
  { "source": "/privacy-policy/", "target": "/privacy/", "status": 301 },
  { "source": "/terms-and-conditions/", "target": "/terms/", "status": 301 },
  { "source": "/help/firestick/", "target": "/help/setup-firestick/", "status": 301 },
  { "source": "/help/smart-tv/", "target": "/help/setup-smart-tv/", "status": 301 },
  { "source": "/help/tivimate/", "target": "/help/setup-tivimate/", "status": 301 },
  { "source": "/help/buffering/", "target": "/help/fix-buffering-issues/", "status": 301 },
  { "source": "/help/uk-isp/", "target": "/help/uk-isp-broadband-troubleshooting/", "status": 301 }
]
```
"""

# Write to both shortiptv and SEO 1 UK
with open(r'c:\Users\clanm\OneDrive\Desktop\shortiptv\REDIRECT-MAP.md', 'w', encoding='utf-8') as f:
    f.write(map_content)

with open(r'c:\Users\clanm\OneDrive\Desktop\SEO 1 UK\REDIRECT-MAP.md', 'w', encoding='utf-8') as f:
    f.write(map_content)

print('Generated REDIRECT-MAP.md in shortiptv and workspace!')
