/**
 * Created by sleep on 2017/5/27.
 */

const mysql = require('mysql')
const conifg = require('../config.js')
const pool  = mysql.createPool(conifg.db)

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {

                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = query