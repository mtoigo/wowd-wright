WOWD Wright
------------------------------

## Squarespace Wright (a.k.a. "Brine") template adapted for takomaradio.org.

**Modifications for WOWD from Wright**
* Display blog post thumbnail images and titles as banner images, just like in Bedford
* Add a third header that includes a global player
* Add a "Listen Live" link to the nav with a play button.
* Import wowd-components and create static pages that use these components.

**Features**
* Parallax scrolling images and background video
* Stacked index supports pages with content overlaid on background images, and "packed" grid gallery style
* Flexible header and mobile bars with interchangeable, movable components
* Footer that supports stacked or column-based layout
* SVG UI icons with adjustable weights

## Basic Usage

This template uses [Node Package Manager](https://www.npmjs.com/) to handle dependency management and run build scripts. After cloning this repo, install dependencies:

```sh
npm install
```

To use the local development process, you'll need to install the [Squarespace Local Development Server](http://developers.squarespace.com/local-development) separately, then run:

```sh
npm start
```

If this does not work, do not dispair, a workaround is below.

### Manual deployment

Note from WOWD developer Julian:
The squarespace toolbelt that automates these steps appears to be broken with no current plans to fix it.
If `npm run deploy` is still not functional, the same steps can be taken manually.

Squarespace templates are modified via git.
This git repo builds another git repo inside the `build` directory.
The `build` directory is what is actually published to Squarespace.

First, add a git remote to the `build` git repository to point to Squarespace.

For example:
```sh
cd build
git remote add prod https://takomaradio.squarespace.com/template.git
cd ..
```

Then, to deploy:

```sh
npm run build
cd build
git add .
git commit -m "changes"
git push prod master
```

### Automated step (if it works for you)

To deploy to your live Squarespace site, run:

```sh
npm run deploy
```

## Updating the wowd-components version

```sh
npm update wowd-components
npm run build
```

The build step runs a script which copies the built files into the proper places in the template.
See `copyComponents.sh` for details.

Commit your changes, then, deploy per the instructions above.

## NPM Script Reference

This template's NPM scripts make extensive use of `squarespace` CLI commands. To learn more about what's happening under the hood, check out [Squarespace Toolbelt](https://github.com/Squarespace/squarespace-toolbelt) on Github.

### npm run build
Cleans the build folder, copies squarespace files (JSON-T, LESS, assets) into the build folder from source and `node_modules`, and runs Webpack to bundle Javascript.

### npm run clean
Cleans the build folder, removing all build results.

### npm run deploy
Deploys your built template to production using Git. If not already configured, initializes a Git repo for deployment in your build folder. Note this is separate from your source repository, and will only contain the build result.

### npm run lint
Runs ESLint on the scripts in your `/scripts` folder.

### npm start
Runs watch, and simultaneously launches Squarespace Server. By default this runs on `localhost:9000`.

### npm run server
Launches Squarespace Server.

### npm run server:auth
Launches Squarespace Server, prompting you for your Squarespace authentication details. Useful if your site is password-protected.

### npm run watch
Watches your source directory as well as your scripts and modules for changes, and builds on the fly when changes are detected.


## License
Portions Copyright © 2016 Squarespace, Inc. This code is licensed to you pursuant to Squarespace’s Developer Terms of Use, available at http://developers.squarespace.com/developer-terms-of-use (the “Developer Terms”). You may only use this code on websites hosted by Squarespace, and in compliance with the Developer Terms. TO THE FULLEST EXTENT PERMITTED BY LAW, SQUARESPACE PROVIDES ITS CODE TO YOU ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.