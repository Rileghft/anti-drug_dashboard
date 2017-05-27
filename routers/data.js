const Router = require('koa-router')
const data = require('../controllers/data.js')

let router = new Router()
router.get(':name', data.queryData)
      .get(':name/description', data.description)

module.exports = router