let mix = require('laravel-mix')
const PurgeSvgPlugin = require('purgesvg-webpack-plugin')

class PurgeSvg {
  name() {
    return ['purgeSvg', 'purgesvg']
  }

  register(path = './purgesvg.js') {
    this.path = path
  }

  webpackPlugins() {
    return new PurgeSvgPlugin(this.path)
  }
}

mix.extend('purgeSvg', new PurgeSvg())