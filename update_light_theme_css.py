import re

globals_path = r"app/globals.css"

with open(globals_path, "r", encoding="utf-8") as f:
    css = f.read()

# 1. Update :root
root_light = """:root {
  /* ---- IPTV Strong UK: Ultra-Clean White & Modern Light Theme ---- */
  --background: #ffffff;
  --background-soft: #f8fafc;        /* Subtle slate-50 section & card highlight */
  --background-section: #f1f5f9;     /* Soft slate-100 alternating section */
  --foreground: #0f172a;             /* Crisp deep slate headings */
  --foreground-muted: #334155;       /* High-contrast readable body text */
  --border: #e2e8f0;                 /* Clean subtle light border */
  --accent: #2563eb;                 /* Royal Electric Blue */
  --accent-strong: #1d4ed8;          /* Deep Cobalt Blue */
  --accent-secondary: #7c3aed;       /* Vivid Indigo Violet */
  --navy-deep: #0a0f1d;              /* Grounding midnight obsidian footer */

  /* Modern High-End Gradients */
  --gradient-primary: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  --gradient-primary-hover: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  --gradient-soft: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(14, 165, 233, 0.08) 100%);
  --gradient-whatsapp: linear-gradient(135deg, #10b981 0%, #059669 100%);
  --gradient-accent-text: linear-gradient(135deg, #0f172a 30%, #1e40af 100%);

  /* Component Tokens */
  --bg-primary: var(--background);
  --bg-surface: var(--background-soft);
  --bg-card: #ffffff;
  --bg-card-hover: #f8fafc;
  --bg-elevated: #ffffff;
  --bg-glass: rgba(255, 255, 255, 0.94);

  --border-subtle: #f1f5f9;
  --border-card: var(--border);
  --border-hover: #2563eb;
  --border-focus: #2563eb;

  --text-primary: var(--foreground);
  --text-secondary: var(--foreground-muted);
  --text-muted: #64748b;
  --text-dim: #94a3b8;

  /* Accent mappings */
  --accent-cyan: #2563eb;
  --accent-cyan-light: #0284c7;
  --accent-cyan-dark: #1d4ed8;
  --accent-glow: rgba(37, 99, 235, 0.12);
  --accent-blue-deep: #1e3a8a;
  --uk-subtle-red: #e11d48;
  --uk-subtle-blue: #2563eb;

  /* Status colours */
  --status-info-bg: #eff6ff;
  --status-info-border: #bfdbfe;
  --status-warning-bg: #fffbeb;
  --status-warning-border: #fde68a;
  --status-warning-accent: #d97706;
  --status-warning-text: #92400e;
  --status-compliance-bg: #ecfdf5;
  --status-compliance-border: #a7f3d0;
  --status-compliance-accent: #059669;
  --status-compliance-text: #065f46;

  /* Spacing Tokens */
  --container-max-width: 1240px;
  --container-padding: 1.5rem;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Luminous Elevation Shadows for White Backgrounds */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
  --shadow-md: 0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
  --shadow-lg: 0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04);
  --shadow-glow: 0 8px 30px rgba(37, 99, 235, 0.12);
  --shadow-cta: 0 8px 25px rgba(16, 185, 129, 0.35);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 250ms cubic-bezier(0.16, 1, 0.3, 1);
}"""

# Replace :root { ... }
css = re.sub(r':root\s*\{[^}]*\}', root_light, css, count=1)

# 2. Update nav-dropdown dark background
old_nav_dropdown = r"background-color: rgba\(10, 14, 32, 0\.96\); backdrop-filter: blur\(24px\); border: 1px solid rgba\(255, 255, 255, 0\.12\); box-shadow: 0 20px 50px rgba\(0, 0, 0, 0\.8\), 0 0 25px rgba\(6, 182, 212, 0\.15\);"
new_nav_dropdown = r"background-color: #ffffff; backdrop-filter: blur(20px); border: 1px solid #e2e8f0; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);"
css = css.replace(old_nav_dropdown, new_nav_dropdown)

# 3. Update mobile-nav-toggle
old_toggle = r"background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); color: #ffffff;"
new_toggle = r"background-color: #ffffff; border: 1px solid #e2e8f0; color: #0f172a;"
css = css.replace(old_toggle, new_toggle)

# 4. Update the bottom IPTV Strong UK enhancements
enhancements_light = """/* ==========================================================================
   IPTV Strong UK - Premium Custom Light Theme Enhancements
   ========================================================================== */

/* Typography & Headings */
h1, h2, h3, h4, h5, h6, .hero-title, .order-page-title {
  font-family: 'Outfit', 'Inter', -apple-system, sans-serif !important;
  letter-spacing: -0.02em;
  color: #0f172a;
}

body, p, input, select, textarea, button {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Glassmorphism & Elevation on Cards */
.card, .pricing-card, .callout, .accordion-item, .code-panel, .step-guide-item {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.card:hover, .pricing-card:hover {
  transform: translateY(-4px);
  border-color: #2563eb;
  box-shadow: 0 16px 35px rgba(37, 99, 235, 0.12), 0 4px 10px rgba(0, 0, 0, 0.04);
}

/* Hero Section Luminous White Background */
.section-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, rgba(14, 165, 233, 0.04) 40%, transparent 70%),
    radial-gradient(circle at 10% 40%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 90% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 50%),
    #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 5rem 0 4rem 0;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.15;
  margin: 1.25rem 0 1rem 0;
  max-width: 950px;
  background: linear-gradient(135deg, #0f172a 30%, #1e40af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
}

/* Luminous Live Pill Badge */
.hero-glow-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.25);
  color: #2563eb;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.08);
}

.live-radar-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: pulse-radar 1.8s infinite;
}

@keyframes pulse-radar {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1.15); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

/* Clean Trust Proof Bar */
.hero-trust-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0.85rem 1.75rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  font-size: 0.9rem;
  color: #1e293b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.trust-stars {
  color: #f59e0b;
  letter-spacing: 2px;
  font-size: 1rem;
}

.trust-divider {
  color: #cbd5e1;
}

/* Sports Marquee Ticker */
.sports-marquee-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 2.5rem;
  max-width: 1000px;
}

.sports-badge {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #334155;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.sports-badge:hover {
  background: rgba(37, 99, 235, 0.08);
  border-color: #2563eb;
  color: #2563eb;
  transform: translateY(-2px);
}

/* Floating WhatsApp Widget */
.whatsapp-float-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease;
}

.whatsapp-float-widget:hover {
  transform: scale(1.05);
}

.whatsapp-float-bubble {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.45);
  position: relative;
}

.whatsapp-ping-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: ping-ring 2s infinite;
}

@keyframes ping-ring {
  0% { transform: scale(0.9); opacity: 0.9; }
  70% { transform: scale(1.3); opacity: 0; }
  100% { transform: scale(1.3); opacity: 0; }
}

.whatsapp-float-tooltip {
  display: none;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 0.9rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

@media (min-width: 768px) {
  .whatsapp-float-tooltip {
    display: block;
  }
}

.tooltip-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #0f172a;
}

.tooltip-sub {
  font-size: 0.75rem;
  color: #059669;
  font-weight: 600;
}

/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border: none;
  color: #ffffff !important;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  transition: all 0.25s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
  transform: translateY(-2px);
}

/* Order Options Radio Enhancement */
.order-option {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 14px !important;
  color: #0f172a !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03) !important;
  transition: all 0.2s ease !important;
}

.order-option:hover {
  border-color: #93c5fd !important;
}

.order-option.selected {
  border-color: #2563eb !important;
  background: #eff6ff !important;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.12) !important;
}
"""

# Replace the section from /* ========================================================================== IPTV Strong UK - Premium Custom Enhancements
split_marker = "/* ==========================================================================\n   IPTV Strong UK - Premium Custom Enhancements"
if split_marker in css:
    css = css.split(split_marker)[0] + enhancements_light
else:
    # Try alternate line ending
    split_marker_alt = "/* ==========================================================================\r\n   IPTV Strong UK - Premium Custom Enhancements"
    if split_marker_alt in css:
        css = css.split(split_marker_alt)[0] + enhancements_light
    else:
        print("Warning: split marker not found, appending enhancements")
        css += "\n" + enhancements_light

with open(globals_path, "w", encoding="utf-8") as f:
    f.write(css)

print("globals.css successfully updated to modern white light theme!")
