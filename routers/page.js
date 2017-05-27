const Router = require('koa-router')
const home = require('../controllers/home.js')
const dashboard = require('../controllers/dashboard.js')
const dataMarket = require('../controllers/dataMarket.js')
const dataDetail = require('../controllers/dataDetail.js')
const dataVisual = require('../controllers/dataVisual.js')
const dataVisualPost = require('../controllers/dataVisual.js')

let router = new Router()
router.get('/', home)
    .get('dashboard/', dashboard)
    .get('dataMarket/', dataMarket)
    .get('dataDetail/:name/', dataDetail)
    .get('dataVisual/:name/', dataVisual)
    .post('dataVisual/:name/', dataVisualPost)

module.exports = router