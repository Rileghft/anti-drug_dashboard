const Router = require('koa-router')
const home = require('../controllers/home.js')

let router = new Router()
router.get('/', home)

module.exports = router