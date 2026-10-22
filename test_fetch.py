import requests
import sys

urls = [
    'https://ultra8kottx.com/',
    'https://ultra8k.tv/',
    'https://iptvuksubscription.co.uk/',
    'https://bentvpro.uk/',
    'https://strong-8k.co.uk/strong-8k-iptv-uk/'
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-GB,en;q=0.9',
}

for u in urls:
    print(f"Testing {u}...", flush=True)
    try:
        r = requests.get(u, headers=headers, timeout=10, allow_redirects=True)
        print(f"-> SUCCESS: {r.status_code}, Final URL: {r.url}, Length: {len(r.text)}", flush=True)
    except Exception as e:
        print(f"-> FAILED: {type(e).__name__}: {e}", flush=True)
