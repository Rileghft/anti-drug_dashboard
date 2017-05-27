/**
 * Created by sleep on 2017/5/27.
 */

const mysql = require('mysql')
const conifg = require('../config.js')
let connection = mysql.createConnection(conifg.db)

module.exports = connection