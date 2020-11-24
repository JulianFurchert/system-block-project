const fs = require('fs-extra')
const path = require('path')

let dependencies = [
  "@interop-ui/react-accordion",
  "@interop-ui/react-avatar",
  "@interop-ui/react-checkbox",
  "@interop-ui/react-separator",
  "@interop-ui/react-switch",
  "@interop-ui/react-tabs",
  "@interop-ui/react-tooltip",
  "@stitches/react"
];

let peerDependencies = [
  "react",
  "react-dom",
];

let devDependencies = [
  "@babel/core",
  "@storybook/addon-actions",
  "@storybook/addon-essentials",
  "@storybook/addon-links",
  "@storybook/react",
  "babel-loader",
  "cpy",
  "microbundle",
  "react",
  "react-dom",
  "typescript"
];

let package = {
  "name": "system-blocks",
  "version": "0.0.1",
  "description": "system-blocks",
  "license": "MIT",
  "source": "src/index.js",
  "main": "dist/index.js",
  "module": "dist/index.module.js",
  "scripts": {
    "build": "microbundle",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "dependencies": {},
  "peerDependencies": {},
  "devDependencies": {}
}

const folder = ['.storybook', 'components', 'stories']
const files = ['index.ts', 'stitches.config.ts', 'tsconfig.json']

function copyFolder(){
  const destDir = path.join(process.cwd(), `/dist`);

  try {
    fs.remove(destDir)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
  folder.forEach(name => {
    const srcDir = path.join(process.cwd(), `/${name}`);
    const destDir = path.join(process.cwd(), `/dist/${name}`);
    try {
      fs.copy(srcDir, destDir)
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  })
  files.forEach(name => {
    const srcDir = path.join(process.cwd(), `/${name}`);
    const destDir = path.join(process.cwd(), `/dist/${name}`);
    try {
      fs.copy(srcDir, destDir)
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  })
}

function createPackage(){
  const destDir = path.join(process.cwd(), `/dist/package.json`);
  try {
    fs.outputJson(destDir, package)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

copyFolder();
createPackage();