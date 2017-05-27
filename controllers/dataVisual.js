const views = require('koa-views')
const detail = require('../models/dataDetail')

let dataVisual = async(ctx) => {
    rows = await detail.getDataList(ctx.params.name)
    console.log(rows)
    await ctx.render('dataVisual', row=rows[0])
}

module.exports = dataVisual