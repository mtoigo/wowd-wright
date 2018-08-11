COMPONENTS="./node_modules/wowd-components/dist"
if [ ! -d "$COMPONENTS" ]; then
  echo "wowd_components is not installed in $COMPONENTS";
  exit 1;
fi

cp -v $COMPONENTS/*.png ./assets/
cp -v $COMPONENTS/*.gif ./assets/
cp -v $COMPONENTS/*.jpg ./assets/
cp -v $COMPONENTS/*.svg ./assets/
cp -v $COMPONENTS/app.bundle.js ./scripts/components.bundle.js

# This little mess turns CSS back into LESS
# Squarespace processes all CSS as LESS,
# which means that it will mangle 
# calc(100% - 5px) by trying to run the calculation.
# Also, the development server version of Squarespace LESS mangles "1fr" into "1 fr".
# This adds LESS escapes around these expressions.
cat $COMPONENTS/style.bundle.css | sed -E -e 's/(calc[^\)]*\)|[0-9]+fr)/~"\1"/' > ./styles/components.bundle.LESS