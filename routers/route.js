const Router = require('koa-router')
const page = require('./page.js')
const data = require('./data')

const router = new Router()
router.use('/', page.routes(), page.allowedMethods())
         .use('/data/', data.routes(), data.allowedMethods())

module.exports = router