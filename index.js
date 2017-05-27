const Koa = require('koa')
const views = require('koa-views')
const Router = require('koa-router')
const route = require('./routers/route')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
const config = require('./config')

const staticPath = './static'
const app = new Koa()
app.use(logger())
app.use(bodyparser())
app.use(static(
    path.join(__dirname, staticPath)
))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(route.routes()).use(route.allowedMethods())
app.listen(config.port)
console.log(`Hackthon anti-drug dashboard server start on port ${config.port}`)