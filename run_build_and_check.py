import subprocess
import sys

project_dir = r"c:\Users\clanm\OneDrive\Desktop\shortiptv"

print("--- RUNNING BUILD ---")
build_res = subprocess.run(["node", "build.js"], cwd=project_dir, capture_output=True, text=True)
print(build_res.stdout)
if build_res.stderr:
    print("Build stderr:", build_res.stderr)

print("--- RUNNING TESTS / CHECK ---")
check_res = subprocess.run(["node", "tests/check.js"], cwd=project_dir, capture_output=True, text=True)
print(check_res.stdout)
if check_res.stderr:
    print("Check stderr:", check_res.stderr)

sys.exit(check_res.returncode)
