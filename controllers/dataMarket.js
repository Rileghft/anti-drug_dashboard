const views = require('koa-views')
const mysql = require('mysql')
const market = require('../models/dataMarket')

let dataMarket = async(ctx) => {
    let rows = await market.getDataList([])
    console.log(rows);
    await ctx.render('dataMarket', row=rows)
}

module.exports = dataMarket