/**
 * Created by sleep on 2017/5/27.
 */

const query = require('../utils/dbConnect')

let dataVisual = {
    async queryComp(userName) {
        let _sql = `SELECT * FROM dashboard WHERE userName = ?;`
        let result = await query(_sql, userName)
        return result
    },
    async addComp(params) {
        let _sql = `INSERT INTO dashboard (??) VALUES(?)`
        //pass object params
        let cols = params.columns
        let colstr = cols.map(r => `\"${r}\"`)
        params.columns = `[${colstr.join()}]`
        let result = await query(_sql, [Object.keys(params), Object.values(params)])
        return result
    },
    async removeComp(id) {
        let _sql = `DELETE FROM dashboard WHERE id = ?;`
        let result = await query(_sql, id)
        return result
    },
    async updateComp(compID, params) {
        let _sql = `UPDATE dashboard SET ? WHERE id = ?;`
        let cols = params.columns
        let colstr = cols.map(r => `\"${r}\"`)
        params.columns = `[${colstr.join()}]`
        let result = await query(_sql, [params, compID])
        return result
    }
}
module.exports = dataVisual