# Installed latest node through NVM
# Run npm install
# npm install -g @squarespace/server
# Run ./node_modules/.bin/squarespace setup if you never have before
./node_modules/.bin/squarespace assemble && ./node_modules/.bin/webpack && ./node_modules/.bin/squarespace deploy
