import os

css_path = r'c:\Users\clanm\OneDrive\Desktop\shortiptv\src\css\main.css'

css = """/* AuraStream UK Design System - Modern Dark Aesthetics with Glassmorphism */
:root {
  --color-bg: #070b12;
  --color-bg-alt: #0c1220;
  --color-surface: #0f172a;
  --color-surface-hover: #172554;
  --color-surface-card: rgba(15, 23, 42, 0.75);
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
  --color-brand: #38bdf8;
  --color-brand-secondary: #6366f1;
  --color-brand-gradient: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
  --color-accent: #10b981;
  --color-warning: #f59e0b;
  --color-border: rgba(148, 163, 184, 0.14);
  --color-border-focus: #38bdf8;
  --color-footer-bg: #030712;
  --color-footer-text: #94a3b8;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --radius-sm: 6px;
  --radius: 12px;
  --radius-lg: 18px;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2.5rem;
  --space-5: 4rem;
  --max-width: 72rem;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-card: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 35px -5px rgba(56, 189, 248, 0.25);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at 50% -10%, rgba(56, 189, 248, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 100% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
              var(--color-bg);
}

/* Accessibility Skip Link */
.skip-link {
  position: absolute;
  top: -100px;
  left: var(--space-2);
  background: var(--color-brand);
  color: #030712;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  font-weight: 700;
  z-index: 1000;
  transition: top 0.2s ease;
  text-decoration: none;
}
.skip-link:focus {
  top: var(--space-2);
}

/* Container */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
}

/* Header & Navigation */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(7, 11, 18, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.2s ease;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.5rem;
}

.brand {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.brand::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-brand-gradient);
  box-shadow: 0 0 12px var(--color-brand);
}

.nav-toggle {
  display: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
}
.nav-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
}

.site-nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
}

.site-nav a {
  color: var(--color-muted);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.35rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: color 0.2s ease, background 0.2s ease;
}
.site-nav a:hover {
  color: #ffffff;
}
.site-nav a[aria-current="page"] {
  color: var(--color-brand);
  font-weight: 600;
}

/* Breadcrumbs */
.breadcrumbs {
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
  font-size: 0.875rem;
}
.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5rem;
  align-items: center;
}
.breadcrumbs li:not(:last-child)::after {
  content: "/";
  margin-left: 0.5rem;
  color: rgba(148, 163, 184, 0.4);
}
.breadcrumbs a {
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}
.breadcrumbs a:hover {
  color: var(--color-brand);
}
.breadcrumbs li[aria-current="page"] {
  color: #ffffff;
  font-weight: 500;
}

/* Typography & Content Structure */
main {
  flex: 1;
  padding-bottom: var(--space-5);
}

h1, h2, h3, h4, h5, h6 {
  color: #ffffff;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

h1 {
  font-size: clamp(2rem, 4vw + 1rem, 3.25rem);
  margin-bottom: var(--space-3);
  font-weight: 800;
}

h2 {
  font-size: clamp(1.5rem, 2.5vw + 0.5rem, 2.15rem);
  margin-top: var(--space-4);
  margin-bottom: var(--space-2);
}

h3 {
  font-size: 1.35rem;
  margin-top: var(--space-3);
  margin-bottom: var(--space-1);
}

p {
  margin-bottom: var(--space-2);
  color: var(--color-muted);
}

.lead {
  font-size: 1.18rem;
  line-height: 1.6;
  color: #e2e8f0;
  max-width: 50rem;
  margin-bottom: var(--space-3);
}

strong {
  color: #ffffff;
}

a {
  color: var(--color-brand);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s ease;
}
a:hover {
  color: #7dd3fc;
}

/* Hero Section Component */
.hero-box {
  padding: var(--space-4) var(--space-3);
  margin-bottom: var(--space-4);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
}
.hero-box::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%);
  pointer-events: none;
}

/* Badges & Pills */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
  border: 1px solid transparent;
}
.badge-cyan {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  border-color: rgba(56, 189, 248, 0.3);
}
.badge-emerald {
  background: rgba(16, 185, 129, 0.12);
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.3);
}
.badge-amber {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border-color: rgba(245, 158, 11, 0.3);
}

/* Notice & Callout Boxes */
.notice, .callout {
  padding: var(--space-3);
  border-radius: var(--radius);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
}
.notice {
  border-left: 4px solid var(--color-warning);
  background: rgba(245, 158, 11, 0.08);
}
.callout-tip {
  border-left: 4px solid var(--color-accent);
  background: rgba(16, 185, 129, 0.08);
}
.callout-info {
  border-left: 4px solid var(--color-brand);
  background: rgba(56, 189, 248, 0.08);
}

/* Grid & Cards */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
}

.card {
  background: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-glow);
}
.card h2, .card h3 {
  margin-top: 0;
  margin-bottom: var(--space-1);
}

/* Step-by-Step Educational Cards */
.step-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
}
.step-card {
  background: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-3);
  position: relative;
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  gap: 1.25rem;
  align-items: start;
}
.step-num {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: var(--radius-sm);
  background: var(--color-brand-gradient);
  color: #030712;
  font-weight: 800;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
}
.step-content h3 {
  margin-top: 0;
}

/* Action Buttons */
.button, a.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-brand-gradient);
  color: #030712;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 14px rgba(56, 189, 248, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: var(--space-2);
}
.button:hover, a.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5);
  color: #030712;
}
.button.secondary, a.button.secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border: 1px solid var(--color-border);
  box-shadow: none;
}
.button.secondary:hover, a.button.secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

/* Tables */
.table-wrapper {
  overflow-x: auto;
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
}
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background: var(--color-surface);
}
th, td {
  padding: 0.9rem 1.2rem;
  border-bottom: 1px solid var(--color-border);
}
th {
  background: rgba(30, 41, 59, 0.8);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
td {
  color: var(--color-muted);
  font-size: 0.95rem;
}
tr:last-child td {
  border-bottom: none;
}
tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

/* Footer */
.site-footer {
  background: var(--color-footer-bg);
  border-top: 1px solid var(--color-border);
  padding: var(--space-4) 0;
  color: var(--color-footer-text);
  margin-top: auto;
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  list-style: none;
  margin-bottom: var(--space-2);
}
.footer-links a {
  color: var(--color-footer-text);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.15s ease;
}
.footer-links a:hover {
  color: var(--color-brand);
}
.site-footer p {
  font-size: 0.85rem;
  color: rgba(148, 163, 184, 0.6);
  margin-bottom: 0;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  .site-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(7, 11, 18, 0.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-3);
  }
  .site-nav.open {
    display: block;
  }
  .site-nav ul {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
  .site-nav a {
    display: block;
    width: 100%;
    padding: 0.6rem 0.5rem;
    font-size: 1.05rem;
  }
  .step-card {
    grid-template-columns: 1fr;
  }
  .step-num {
    margin-bottom: 0.5rem;
  }
}
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

print('Updated main.css successfully!')
