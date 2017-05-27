const views = require('koa-views')
const data = require('./data')
let dataVisual = async(ctx) => {
    await data.description(ctx)
    console.log(ctx.body)
    await ctx.render('dataVisual', rows=ctx.body)
}

module.exports = dataVisual