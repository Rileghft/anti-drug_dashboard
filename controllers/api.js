const  dataVisual = require('../models/dataVisual')

let dashboard = {
    async getComps(ctx) {
        let result = await dataVisual.queryComp(ctx.params.user)
        ctx.body = result
        ctx.type = 'application/json'
    },
    async addComp(ctx) {
        let params = ctx.request.body
        let result = await dataVisual.addComp(params)
        ctx.body = result
    },
    async updateComp(ctx) {
        let params = ctx.request.body
        params.id = parseInt(params.id)
        let config = params.config
        config.dataID = parseInt(config.dataID)
        config.top = parseInt(config.top)
        config.left = parseInt(config.left)
        config.width = parseInt(config.width)
        config.height = parseInt(config.height)
        let result = await dataVisual.updateComp(params.id, params.config)
        ctx.body = result
    },
    async deleteComp(ctx) {
        let params = ctx.request.body
        let result = await dataVisual.removeComp(parseInt(params.id))
        ctx.body = result
    },
    async nameToID(ctx) {
        let name = ctx.request.body
        console.log(name)
        let result = await dataVisual.nameToID(name)
        console.log(result)
        ctx.body = result
    }
}

module.exports = dashboard