const views = require('koa-views')
const mysql = require('mysql')
const board = require('../models/databoard')
let dashboardPost = async(ctx) => {
    rows = await board.getboardDetail(null)
    ctx.body = rows
    ctx.type = 'application/json'
    console.log(rows)
}

module.exports = dashboardPost