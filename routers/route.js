const Router = require('koa-router')
const page = require('./page.js')
const data = require('./data')
const api = require('./api')

const router = new Router()
router.use('/', page.routes(), page.allowedMethods())
         .use('/data/', data.routes(), data.allowedMethods())
         .use('/api/', api.routes(), api.allowedMethods())

module.exports = router