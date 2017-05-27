/**
 * Created by sleep on 2017/5/27.
 */

const query = require('../utils/dbConnect')

let VisualPost = {
    async setVisual(parmas) {
        let _sql = `SELECT * FROM datalist WHERE name=?;
        `
        let result = await query(_sql, parmas)
        return result
    }
}
module.exports = VisualPost