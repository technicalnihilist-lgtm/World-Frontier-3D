# Research pass — how the world was referenced

Before any asset was written, this project ran a research agent against the
public Wikimedia APIs and stored what it found.

## Method

1. `research/fetch_refs.py` queries the Commons API:
   `action=query&generator=search&gsrsearch=filetype:bitmap <topic>&gsrnamespace=6`
   with `prop=imageinfo&iiprop=url|extmetadata|size`.
2. For every hit it records the file title, description-page URL, thumbnail URL,
   original size, creator (`extmetadata.Artist`), licence short name
   (`LicenseShortName`) and licence URL.
3. Results are written to `research/wikimedia_refs.json` — 57 files across 19
   topics — and surfaced in the game's Credits screen and in `CREDITS.md`.

## Topics studied

city skylines · street traffic · motorway interchanges · sports cars ·
motorcycles · trucks · helicopters · airliners · railway stations · deer ·
forests · Himalayan ranges · deserts · tropical coasts · lakes · snow villages ·
rain storms · monuments · farms · street markets

## How the research was used

- **Architecture** — the city generator takes its block rhythm, floor-height
  window grid and skyline falloff from the reference photographs.
- **Vehicles** — proportion studies (wheelbase to body ratio, cabin height,
  truck box volume) informed the procedural vehicle builder.
- **Terrain and weather** — biome palettes and fog/haze values were tuned against
  the landscape and storm references.
- **Wildlife** — the deer proportions in `src/entities.js` follow the reference
  shots.

## Licensing position

Reference photographs were **studied, not shipped**. Nothing from Commons is
redistributed in the APK: all textures are generated on a `<canvas>` at runtime
and all meshes are built from primitives. The creator and licence of every file
is recorded so anyone extending the project can verify permissions before
reusing an image.
