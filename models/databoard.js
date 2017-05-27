/**
 * Created by sleep on 2017/5/27.
 */

const query = require('../utils/dbConnect')

let board = {
    async getboardDetail(parmas) {
        let _sql = `SELECT A.id, B.name, A.userName, A.columns, A.type, A.top, A.left, A.width, A.height 
            FROM dashboard A, datalist B 
            WHERE A.userName='user' AND A.dataID=B.id;
        `
        let result = await query(_sql, parmas)
        return result
    }
}
module.exports = board