const Router = require('koa-router')
const home = require('../controllers/home.js')
const dashboard = require('../controllers/dashboard.js')
const dashboardPost = require('../controllers/dashboardPost.js')
const dragPost = require('../controllers/dragPost.js')
const dataMarket = require('../controllers/dataMarket.js')
const dataVisual = require('../controllers/dataVisual.js')
const dataVisualPost = require('../controllers/dataVisual.js')

let router = new Router()
router.get('/', home)
    .get('dashboard/', dashboard)
    .post('dashboard/', dashboardPost)
    .post('drag', dragPost)
    .get('dataMarket/', dataMarket)
    .get('dataVisual/:name/', dataVisual)
    .post('dataVisual/:name/', dataVisualPost)

module.exports = router