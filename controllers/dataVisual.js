const views = require('koa-views')
const dataAPI = require('./data')
let dataVisual = async(ctx) => {
    await dataAPI.description(ctx)
    console.log(ctx.params.name)
    await ctx.render('dataVisual', data=JSON.parse(ctx.body),  myname=ctx.params.name)
}

module.exports = dataVisual