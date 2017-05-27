/**
 * Created by sleep on 2017/5/27.
 */
const views = require('koa-views')
const mysql = require('mysql')
const data = require('./data')
let VisualPost = async(ctx) => {
    await data.description(ctx)
    console.log(ctx.body)
    await ctx.render('dataVisual', rows=ctx.body)
}

module.exports = VisualPost