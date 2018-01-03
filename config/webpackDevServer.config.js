'use strict'

const paths = require('./paths')
const config = require('./webpack.config.dev')

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || '0.0.0.0'

module.exports = () => {
  return {
    hot: true,
    contentBase: config.output.publicPath,
    compress: true,
    port: 8080,
    https: protocol === 'https',
    host: host,
  }
}
