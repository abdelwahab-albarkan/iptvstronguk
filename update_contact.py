import os

contact_content = """---
path: /contact/
parent: /
title: Contact {{brandName}} - Support and Inquiries
description: Get in touch with the {{brandName}} support team via WhatsApp or email for subscription assistance, setup help, and questions.
---
<div class="hero-box">
  <span class="badge badge-cyan">Direct Communication</span>
  <h1>Contact {{brandName}} Support &amp; Enquiries</h1>
  <p class="lead">Have a question regarding your subscription, device setup, or need immediate assistance? Reach out to our dedicated support team below.</p>
</div>

<h2>Direct Contact Channels</h2>
<p>Our team is available daily to answer your questions and assist with subscriptions and setup walkthroughs.</p>

<div class="card-grid">
  <div class="card">
    <h3>Instant WhatsApp Support</h3>
    <p>For fastest response and direct account setup, message our team on WhatsApp:</p>
    <div style="margin: 1.25rem 0;">
      <a class="button" href="https://wa.me/212625218443" target="_blank" rel="noopener">Chat on WhatsApp (+212 625 218 443)</a>
    </div>
    <p><strong>Direct Telephone:</strong> {{phoneBlock}}</p>
  </div>

  <div class="card">
    <h3>Email Support</h3>
    <p>For inquiries, order confirmations, and technical assistance:</p>
    <div style="margin: 1.25rem 0;">
      <a class="button secondary" href="mailto:support@streamb4.com">Email support@streamb4.com</a>
    </div>
    <p><strong>Official Support Email:</strong> {{contactBlock}}</p>
  </div>

  <div class="card">
    <h3>Self-Service Help Centre</h3>
    <p>Browse our verified tutorials and troubleshooting walkthroughs for quick answers:</p>
    <div style="margin: 1.25rem 0;">
      <a class="button secondary" href="/help/">Visit the Help Centre</a>
    </div>
    <p>Step-by-step guides for Firestick, Smart TV, Android, and broadband settings.</p>
  </div>
</div>

<h2>Frequently Consulted Guides</h2>
<div class="card-grid">
  <div class="card">
    <h3>Firestick Setup</h3>
    <p>Step-by-step installation instructions for Amazon Fire TV sticks and cubes.</p>
    <a class="button secondary" href="/help/setup-firestick/">View Firestick guide</a>
  </div>
  <div class="card">
    <h3>Anti-Buffering Solutions</h3>
    <p>Practical techniques to diagnose and fix home network streaming stutter.</p>
    <a class="button secondary" href="/help/fix-buffering-issues/">View buffering fixes</a>
  </div>
  <div class="card">
    <h3>UK ISP Configuration</h3>
    <p>Settings for Virgin Media Web Safe, BT Smart Hub, and Sky Broadband Shield.</p>
    <a class="button secondary" href="/help/uk-isp-broadband-troubleshooting/">View ISP settings</a>
  </div>
</div>
"""

target = r"c:\Users\clanm\OneDrive\Desktop\shortiptv\content\contact.html"
with open(target, "w", encoding="utf-8") as f:
    f.write(contact_content.strip() + "\n")
print("Contact updated successfully.")
