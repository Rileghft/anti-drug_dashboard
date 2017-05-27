/**
 * Created by sleep on 2017/5/27.
 */
const query = require('../utils/dbConnect')

let drag = {
    async setPos(parmas) {
        let _sql = `UPDATE dashboard SET top=?, \`left\`=? WHERE id=?;
        `
        let result = await query(_sql, parmas)
        return result
    }
}
module.exports = drag