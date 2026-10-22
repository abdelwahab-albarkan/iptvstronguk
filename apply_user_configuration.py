import os
import json
import re

root = r'c:\Users\clanm\OneDrive\Desktop\shortiptv'

# 1. Update site.config.json
config_path = os.path.join(root, 'site.config.json')
with open(config_path, 'r', encoding='utf-8') as f:
    cfg = json.load(f)

cfg['brandName'] = 'IPTV Strong UK'
cfg['tagline'] = 'Premium UK & Global Streaming Support and Subscription Service'
cfg['siteUrl'] = 'https://iptvstronguk.com'
cfg['contactEmail'] = 'support@streamb4.com'
cfg['contactPhone'] = '+212625218443'
cfg['whatsapp'] = 'https://wa.me/212625218443'
cfg['commercial'] = {
    'enabled': True,
    'note': 'Commercial pricing enabled with verified rates supplied by business owner on 2026-10-21.'
}
cfg['seoHold'] = []

# Ensure Pricing is in nav and footer
nav_paths = [n['path'] for n in cfg['nav']]
if '/pricing/' not in nav_paths:
    cfg['nav'].insert(1, {'label': 'Pricing', 'path': '/pricing/'})

footer_paths = [f['path'] for f in cfg['footer']]
if '/pricing/' not in footer_paths:
    cfg['footer'].insert(0, {'label': 'Pricing Plans', 'path': '/pricing/'})

with open(config_path, 'w', encoding='utf-8') as f:
    json.dump(cfg, f, indent=2)
print('Updated site.config.json with domain, email, phone, and commercial: true!')

# 2. Update content files to replace AuraStream with {{brandName}}
content_dir = os.path.join(root, 'content')
for f in os.listdir(content_dir):
    if not f.endswith('.html'):
        continue
    fp = os.path.join(content_dir, f)
    with open(fp, 'r', encoding='utf-8') as file:
        text = file.read()
    
    # Replace AuraStream UK or AuraStream with {{brandName}}
    new_text = text.replace('AuraStream UK', '{{brandName}}').replace('AuraStream', '{{brandName}}')
    
    # If contact.html, add phone and whatsapp block
    if f == 'contact.html':
        # update contact card to include phone and direct WhatsApp button
        old_card = '<p><strong>Email:</strong> {{contactBlock}}</p>'
        new_card = '<p><strong>Email:</strong> {{contactBlock}}</p>\\n    <p><strong>Telephone:</strong> {{phoneBlock}}</p>\\n    <div style=\"margin-top: 1rem;\"><a class=\"button\" href=\"https://wa.me/212625218443\" target=\"_blank\" rel=\"noopener\">Chat on WhatsApp (+212 625 218 443)</a></div>'
        if old_card in new_text and 'Chat on WhatsApp' not in new_text:
            new_text = new_text.replace(old_card, new_card)
            
    with open(fp, 'w', encoding='utf-8') as file:
        file.write(new_text)

print('Updated all content pages to use centralized {{brandName}} and verified contact info!')

# 3. Update build.js pricingPage() to include WhatsApp order button
build_path = os.path.join(root, 'build.js')
with open(build_path, 'r', encoding='utf-8') as f:
    build_js = f.read()

# Update pricingPage body in build.js to add WhatsApp CTA
old_notice = '<div class=\"notice\"><strong>How to order:</strong> there is no online checkout. To order or ask a question, contact us${email ? \' by email at \' + email : \'\'}${email && phone ? \' or\' : \'\'}${phone ? \' by telephone on \' + phone : \'\'}.</div>'
new_notice = '<div class=\"notice\"><strong>How to order:</strong> there is no online checkout. To order or ask a question, contact us${email ? \' by email at \' + email : \'\'}${email && phone ? \' or\' : \'\'}${phone ? \' by telephone on \' + phone : \'\'}.</div>\\n<div style=\"text-align: center; margin-top: 1.5rem;\"><a class=\"button\" href=\"https://wa.me/212625218443\" target=\"_blank\" rel=\"noopener\">Order on WhatsApp (+212 625 218 443)</a></div>'

if old_notice in build_js:
    build_js = build_js.replace(old_notice, new_notice)
    with open(build_path, 'w', encoding='utf-8') as f:
        f.write(build_js)
    print('Updated pricingPage in build.js to include WhatsApp button!')

# 4. Update tests/check.js line 121 to acknowledge verified WhatsApp
check_path = os.path.join(root, 'tests', 'check.js')
with open(check_path, 'r', encoding='utf-8') as f:
    check_js = f.read()

old_wa_check = "for (const f of htmlFiles) ok(!/whatsapp|wa\\.me/i.test(fs.readFileSync(f, 'utf8')), `${rel(f)}: WhatsApp reference (number not verified as WhatsApp-enabled)`);"
new_wa_check = """// WhatsApp verified by business owner on 2026-10-21 (+212625218443)
if (!cfg.whatsapp) {
  for (const f of htmlFiles) ok(!/whatsapp|wa\\.me/i.test(fs.readFileSync(f, 'utf8')), `${rel(f)}: WhatsApp reference (number not verified as WhatsApp-enabled)`);
} else {
  const ch = fs.readFileSync(path.join(dist, 'contact/index.html'), 'utf8');
  ok(ch.includes('wa.me/212625218443'), 'contact page: missing verified WhatsApp link');
}"""

if old_wa_check in check_js:
    check_js = check_js.replace(old_wa_check, new_wa_check)
    with open(check_path, 'w', encoding='utf-8') as f:
        f.write(check_js)
    print('Updated tests/check.js to validate verified WhatsApp configuration!')

# 5. Append pricing styling to src/css/main.css
css_path = os.path.join(root, 'src', 'css', 'main.css')
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

pricing_css = """
/* Pricing Page Styles */
.price-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price-card h2 {
  font-size: 1.5rem;
  color: var(--color-brand);
  margin-top: 0;
  margin-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
}
.price-list {
  list-style: none;
  margin: var(--space-2) 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
}
.price-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 0.9rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
}
.price-list li strong {
  font-size: 1.15rem;
  color: #38bdf8;
  font-weight: 700;
}
"""

if '.price-card' not in css_content:
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write(pricing_css)
    print('Added pricing styles to main.css!')
