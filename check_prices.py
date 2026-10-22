import os

found = []
for root, _, files in os.walk('.'):
    if any(p in root for p in ['node_modules', '.next', '.git']):
        continue
    for f in files:
        if f.endswith(('.ts', '.tsx')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8', errors='ignore') as file:
                for idx, line in enumerate(file):
                    if "'.99'" in line or '".99"' in line or "monthlyEquiv: '." in line or 'monthlyEquiv: ".' in line:
                        found.append((fp, idx + 1, line.strip()))

print('Found:', len(found))
for fp, idx, line in found:
    print(f"{fp}:{idx} -> {line}")
