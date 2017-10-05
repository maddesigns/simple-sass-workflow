# Simple Sass Workflow
A Simple Sass Workflow with NPM Script and Browser Sync

## Start
```
npm start
```
(runs `npm run watch:sass | npm run server`)

## Build
```
npn run build
```
(runs `npm run sass && npm run sassmin`)
sass task runs Sass with autoprefixer
sassmin task runs Sass with autoprefixer & compresses with cssnano

