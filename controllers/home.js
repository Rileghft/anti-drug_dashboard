const views = require('koa-views')
let home = async(ctx) => {
    await ctx.render('home')
}

module.exports = home