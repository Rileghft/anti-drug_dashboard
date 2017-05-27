const views = require('koa-views')
const mysql = require('mysql')
const detail = require('../models/dataDetail')

let dataMarket = async(ctx) => {

    rows = await detail.getDataDetail(ctx.params.name)
    console.log(rows)
    await ctx.render('dataDetail', row=rows[0])
}

module.exports = dataMarket