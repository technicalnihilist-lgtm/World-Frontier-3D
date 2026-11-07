#!/bin/bash
# Build a signed debug APK for WORLD FRONTIER 3D using the Android SDK
# command-line tools directly (aapt2 -> javac -> d8 -> zipalign -> apksigner).
set -e
SDK=/scratch/work/tools/sdk
BT=$SDK/build-tools/34.0.0
PLAT=$SDK/platforms/android-34/android.jar
export JAVA_HOME=/scratch/work/tools/jdk
export PATH=$JAVA_HOME/bin:$PATH
export JAVA_TOOL_OPTIONS="-XX:CompressedClassSpaceSize=64m -XX:ReservedCodeCacheSize=64m -Djava.io.tmpdir=/scratch/work/tmp -XX:-UsePerfData"
mkdir -p /scratch/work/tmp

cd "$(dirname "$0")"
rm -rf build && mkdir -p build/gen build/classes build/dex

echo "[1/7] compiling resources"
$BT/aapt2 compile --dir app/src/main/res -o build/res.zip

echo "[2/7] linking resources + assets"
$BT/aapt2 link -o build/base.apk \
  -I "$PLAT" \
  --manifest app/src/main/AndroidManifest.xml \
  -R build/res.zip \
  --java build/gen \
  -A app/src/main/assets \
  --min-sdk-version 24 \
  --target-sdk-version 34 \
  --version-code 2 --version-name 1.0.1 \
  --auto-add-overlay

echo "[3/7] compiling java"
find app/src/main/java build/gen -name '*.java' > build/sources.txt
javac -nowarn -source 8 -target 8 -bootclasspath "$PLAT" -classpath "$PLAT" \
  -d build/classes @build/sources.txt

echo "[4/7] dexing"
find build/classes -name '*.class' > build/classes.txt
$BT/d8 -JXmx512m --lib "$PLAT" --min-api 24 --release --output build/dex @build/classes.txt

echo "[5/7] packaging"
( cd build/dex && zip -q ../base.apk classes.dex )
mkdir -p ../out

echo "[6/7] aligning"
$BT/zipalign -f -p 4 build/base.apk build/aligned.apk

echo "[7/7] signing"
if [ ! -f debug.keystore ]; then
  keytool -genkeypair -v -keystore debug.keystore -storepass android -keypass android \
    -alias androiddebugkey -keyalg RSA -keysize 2048 -validity 10000 \
    -dname "CN=World Frontier, OU=Game Dev, O=WorldFrontier, L=India, C=IN" >/dev/null 2>&1
fi
"$JAVA_HOME/bin/java" -Xmx384m -XX:CompressedClassSpaceSize=48m -XX:ReservedCodeCacheSize=48m \
  -Djava.io.tmpdir=/scratch/work/tmp -jar "$BT/lib/apksigner.jar" sign \
  --ks debug.keystore --ks-pass pass:android --key-pass pass:android \
  --ks-key-alias androiddebugkey --out WorldFrontier3D-v1.0.1.apk build/aligned.apk

"$JAVA_HOME/bin/java" -Xmx384m -XX:CompressedClassSpaceSize=48m -jar "$BT/lib/apksigner.jar" verify --print-certs WorldFrontier3D-v1.0.1.apk | head -4
ls -lh WorldFrontier3D-v1.0.1.apk
$BT/aapt2 dump badging WorldFrontier3D-v1.0.1.apk | head -6
