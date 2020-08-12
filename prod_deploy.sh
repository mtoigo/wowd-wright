# PATH=$PATH:./node_modules/.bin (wasn't picking up executables in ./node_modules/.bin)
# Installed latest node through NVM v14.3.0
# Run npm install
# npm install -g @squarespace/server
# need to run squarespace setup
# Run ./node_modules/.bin/squarespace setup if you never have before
#./node_modules/.bin/squarespace assemble && ./node_modules/.bin/webpack && ./node_modules/.bin/squarespace deploy
# Use commands in package.json rather than this which is just here for cleanup/notes

#Using latest versions of squarespace tooling, using an old version of webpack, config looked like it would have needed a bunch of changes for the latest version of webpack
# also old version of copy-webpack-plugin
# also old version of "babel-loader": "^6.2.10", and other babel modules

# BUGS

# FAST FOLLOWS
Maybe hiding timestamps for recently played + upcoming shows on smaller screen sizes
Text getting cut off on right side of Recently Played on smaller screen sizes
  - Problem here is this content in the iFrame is in a table for Recently Played, Upcoming Shows is divs
  - Could maybe add right padding to both so they cutoff cleaner than on the very edge
