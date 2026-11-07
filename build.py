import json, os, shutil, subprocess, sys

# 1. credits data from real Commons research
recs = json.load(open('research/wikimedia_refs.json'))
seen, refs = set(), []
for r in recs:
    if r['title'] in seen: continue
    seen.add(r['title'])
    refs.append({
        'title': r['title'],
        'creator': r['creator'][:70] or 'Unknown',
        'license': r['license'],
        'page': r['page'],
        'category': r['category'],
    })
refs.sort(key=lambda r: (r['category'], r['title']))
with open('src/credits_data.js', 'w') as f:
    f.write('// generated from research/wikimedia_refs.json (real Commons API metadata)\n')
    f.write('export const CREDITS_REFS = ' + json.dumps(refs, indent=1, ensure_ascii=False) + ';\n')
    f.write('export const CREDIT_LINKS = ' + json.dumps([
        'https://commons.wikimedia.org', 'https://en.wikipedia.org',
        'https://www.mediawiki.org/wiki/API:Main_page', 'https://www.wikidata.org',
    ]) + ';\n')

# 2. bundle
os.makedirs('dist', exist_ok=True)
r = subprocess.run(['npx','esbuild','src/main.js','--bundle','--format=iife','--target=es2019',
                    '--minify','--outfile=dist/game.js','--log-level=warning'], capture_output=True, text=True)
print(r.stdout, r.stderr)
if r.returncode: sys.exit(1)
shutil.copy('src/index.html','dist/index.html')
shutil.copy('src/style.css','dist/style.css')
print('refs:', len(refs))
print('bundle size:', round(os.path.getsize('dist/game.js')/1024), 'KB')
