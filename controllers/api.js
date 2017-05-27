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
        let result = await dataVisual.updateComp(params.id, params.config)
        ctx.body = result
    },
    async deleteComp(ctx) {
        let params = ctx.request.body
        let result = await dataVisual.removeComp(params.id)
        ctx.body = result
    }
}

module.exports = dashboard