const views = require('koa-views')
const mysql = require('mysql')
const detail = require('../models/dataDetail')

let dataVisual = async(ctx) => {
    rows = await detail.getDataDetail(ctx.params.name)
    console.log(rows)
    await ctx.render('dataVisual', row=rows[0])
}

module.exports = dataVisual