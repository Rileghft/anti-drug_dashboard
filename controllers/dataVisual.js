const views = require('koa-views')
const dataAPI = require('./data')
let dataVisual = async(ctx) => {
    await dataAPI.description(ctx)
    await ctx.render('dataVisual', data=JSON.parse(ctx.body))
}

module.exports = dataVisual