/**
 * Created by sleep on 2017/5/27.
 */
const query = require('../utils/dbConnect')

let market = {
    async getDataList(parmas) {
        let _sql = `SELECT * FROM datalist;
        `
        let result = await query(_sql, parmas)
        return result
    }
}
module.exports = market