const views = require('koa-views')
const mysql = require('mysql')
const market = require('../models/dataMarket')

let dataMarket = async(ctx) => {
    let rows = await market.getDataList([])
    await ctx.render('dataMarket', rows=rows)
}

module.exports = dataMarket