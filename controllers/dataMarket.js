const views = require('koa-views')
const mysql = require('mysql')
const conifg = require('../config.js')
let connection = mysql.createPool(conifg.db)

let dataMarket = async(ctx) => {
    connection.query('SELECT * FROM datalist',function(error, rows, fields){
        //檢查是否有錯誤
        if(error){
            throw error;
        }
        console.log(rows[0].id); //2
    });
    await ctx.render('dashboard', title="test")
}

module.exports = dataMarket