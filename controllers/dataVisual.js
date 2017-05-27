const views = require('koa-views')
const dataAPI = require('./data')
let dataVisual = async(ctx) => {
    await dataAPI.description(ctx)
    console.log(ctx.request.query.mode)
    await ctx.render('dataVisual', data=JSON.parse(ctx.body),  myname=ctx.params.name, mode=ctx.request.query.mode)
}

module.exports = dataVisual