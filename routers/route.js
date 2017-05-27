const Router = require('koa-router')
const page = require('./page.js')

const router = new Router()
router.use('/', page.routes(), page.allowedMethods())

module.exports = router