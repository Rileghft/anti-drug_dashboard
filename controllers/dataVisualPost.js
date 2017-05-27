/**
 * Created by sleep on 2017/5/27.
 */
const views = require('koa-views')
const mysql = require('mysql')
const VisualPost = require('../models/dataVisualPost')

let VisualPost = async(ctx) => {

    //console.log(rows)
    await ctx.render('dataVisual')
}

module.exports = VisualPost