/**
 * Created by sleep on 2017/5/27.
 */
const views = require('koa-views')
const mysql = require('mysql')
const drag = require('../models/dragPost')
let dragPost = async(ctx) => {
    data = ctx.request.body
    console.log(data);
    console.log(data.position.top);
    await drag.setPos([data.position.top, data.position.left, data.id])
    ctx.status = 200
}

module.exports = dragPost