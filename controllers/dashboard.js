const views = require('koa-views')
const mysql = require('mysql')
const board = require('../models/databoard')
let dashboard = async(ctx) => {
    await ctx.render('dashboard')
}

module.exports = dashboard