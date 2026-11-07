# Building the APK

Two supported routes.

## 1. Command line only (what produced the shipped APK)

Requires JDK 17 and Android SDK build-tools 34 (`aapt2`, `d8`, `zipalign`,
`apksigner`) plus `platforms/android-34/android.jar`.

```bash
bash build_apk.sh
```

It runs: `aapt2 compile` -> `aapt2 link` (manifest + res + assets) -> `javac`
against `android.jar` -> `d8` -> zip `classes.dex` -> `zipalign` -> `apksigner`
with a generated debug keystore. Output: `WorldFrontier3D-v1.0.0.apk`.

## 2. Android Studio

Open this `android/` folder as a project. The Gradle wrapper is not committed;
Android Studio will offer to generate one, or run `gradle wrapper` once. Then
Build -> Build APK(s).

## Updating the bundled game

The game ships inside `app/src/main/assets/www/`. After changing `../src/`:

```bash
cd ..            # repo root
npm install
python3 build.py # rebuilds dist/
cp dist/* android/app/src/main/assets/www/
bash android/build_apk.sh
```
