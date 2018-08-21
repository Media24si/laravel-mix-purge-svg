# Purgesvg wrapper for Laravel Mix

A simple [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) wrapper for [PurgeSVG](https://github.com/Media24si/purge-svg).

Also available as a webpack plugin [here](https://github.com/Media24si/purgesvg-webpack-plugin).

## Installation
```
npm install --save-dev laravel-mix-purge-svg
yarn add --dev laravel-mix-purge-svg
```

## Config
By default the plugin assumes you have the configuration file `purgesvg.js` inside your root directory. You can copy the default empty config file from the plugin.

From inside your root application directory run:
```
cp ./node_modules/laravel-mix-purge-svg/purgesvg.js .
```

All configuration options can be found [here](https://github.com/Media24si/purge-svg#configuration).


## Usage
#### Example webpack.mix.js

```javascript
let mix = require('laravel-mix');
require('laravel-mix-purge-svg');

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .purgeSvg()
```
