"""Research agent: pull real Wikimedia Commons reference images + license metadata.

Uses the public Commons API (generator=search + imageinfo/extmetadata).
Every record stores creator, license, license URL and the file description page
so the game's Credits screen can attribute them correctly.
"""
import json, re, html, urllib.parse, requests, os, time

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "WorldFrontier3D-research/1.0 (asset reference study)"}

QUERIES = [
    ("city",      "modern city skyline skyscrapers"),
    ("street",    "city street traffic cars road"),
    ("highway",   "motorway highway interchange aerial"),
    ("sportscar", "sports car side view"),
    ("motorcycle","motorcycle side view"),
    ("truck",     "truck lorry side view"),
    ("helicopter","helicopter flying"),
    ("aircraft",  "passenger airliner airport"),
    ("train",     "passenger train railway station"),
    ("deer",      "deer forest wildlife"),
    ("forest",    "deciduous forest trees path"),
    ("mountain",  "himalaya mountain range snow"),
    ("desert",    "desert sand dunes"),
    ("beach",     "tropical beach island palm"),
    ("lake",      "lake reflection mountains"),
    ("snow",      "snow covered village winter"),
    ("rain",      "rain storm clouds sky"),
    ("monument",  "historic monument architecture india"),
    ("farm",      "farm fields countryside tractor"),
    ("market",    "indian street market shops"),
]

def strip(t):
    return html.unescape(re.sub(r"<[^>]+>", "", t or "")).strip()

out = []
for key, q in QUERIES:
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": f"filetype:bitmap {q}", "gsrnamespace": 6, "gsrlimit": 3,
        "prop": "imageinfo", "iiprop": "url|extmetadata|size",
        "iiurlwidth": 640,
    }
    try:
        r = requests.get(API, params=params, headers=UA, timeout=30)
        pages = r.json().get("query", {}).get("pages", {})
    except Exception as e:
        print("fail", key, e); continue
    for p in pages.values():
        ii = (p.get("imageinfo") or [{}])[0]
        md = ii.get("extmetadata", {})
        lic = strip(md.get("LicenseShortName", {}).get("value", "unknown"))
        out.append({
            "category": key,
            "query": q,
            "title": p["title"],
            "page": ii.get("descriptionurl", ""),
            "thumb": ii.get("thumburl", ""),
            "width": ii.get("width"), "height": ii.get("height"),
            "creator": strip(md.get("Artist", {}).get("value", "Unknown")),
            "license": lic,
            "license_url": md.get("LicenseUrl", {}).get("value", ""),
            "credit": strip(md.get("Credit", {}).get("value", "")),
        })
    time.sleep(0.3)

os.makedirs("/scratch/work/game/research", exist_ok=True)
json.dump(out, open("/scratch/work/game/research/wikimedia_refs.json", "w"), indent=1)
print("records:", len(out))
for r in out[:5]:
    print(r["category"], "|", r["title"][:50], "|", r["license"], "|", r["creator"][:40])
