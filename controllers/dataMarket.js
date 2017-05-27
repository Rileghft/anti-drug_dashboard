const views = require('koa-views')
const mysql = require('mysql')
const market = require('../models/dataMarket')

let dataMarket = async(ctx) => {
    rows = await market.getDataList(null)
    await ctx.render('dataMarket', rows=rows)
}

module.exports = dataMarket