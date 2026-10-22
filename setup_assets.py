import os
import shutil

root = r'c:\Users\clanm\OneDrive\Desktop\shortiptv'

# 1. Update favicon.svg
fav_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.4"/>
  <polygon points="24,18 48,32 24,46" fill="url(#grad)"/>
</svg>'''

with open(os.path.join(root, 'src', 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(fav_svg)
print('Updated src/favicon.svg')

# 2. Update build.js to also copy public/images to dist/images if needed
build_js_path = os.path.join(root, 'build.js')
with open(build_js_path, 'r', encoding='utf-8') as f:
    build_code = f.read()

# Check if public/images copy is in build.js
if 'public/images' not in build_code:
    old_copy = "fs.copyFileSync(path.join(root, 'src/favicon.svg'), path.join(dist, 'assets/favicon.svg'));"
    new_copy = """fs.copyFileSync(path.join(root, 'src/favicon.svg'), path.join(dist, 'assets/favicon.svg'));
if (fs.existsSync(path.join(root, 'public/images'))) {
  fs.cpSync(path.join(root, 'public/images'), path.join(dist, 'images'), { recursive: true });
}"""
    build_code = build_code.replace(old_copy, new_copy)
    with open(build_js_path, 'w', encoding='utf-8') as f:
        f.write(build_code)
    print('Updated build.js to copy public/images')
else:
    print('build.js already copies images')
