'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const createDevServerConfig = require('../config/webpackDevServer.config')
const config = require('../config/webpack.config.dev')

const compiler = webpack(config)
const serverConfig = createDevServerConfig()
const server = new WebpackDevServer(compiler, serverConfig)

server.listen(serverConfig.port)
