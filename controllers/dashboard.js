const views = require('koa-views')
let dashboard = async(ctx) => {
    await ctx.render('dashboard', title="test")
}

module.exports = dashboard