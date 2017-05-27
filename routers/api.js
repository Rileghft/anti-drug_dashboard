const Router = require('koa-router')
const api = require('../controllers/api')
let router = new Router()
router.get('dataVisual/:user', api.getComps)
         .post('dataVisual/', api.addComp)
         .put('dataVisual/', api.updateComp)
         .del('dataVisual/', api.deleteComp)

module.exports = router