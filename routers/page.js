const Router = require('koa-router')
const home = require('../controllers/home.js')
const dashboard = require('../controllers/dashboard.js')
const dataMarket = require('../controllers/dataMarket.js')
let router = new Router()
router.get('/', home)
    .get('dashboard/', dashboard)
    .get('dataMarket/', dataMarket)

module.exports = router