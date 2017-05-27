const fs = require('fs')
const path = require('path')

const queryData = (ctx) => {
    let base = path.join(__dirname, '../data', ctx.params.name)
    let descPath = path.join(base, 'config.json')
    let desc = JSON.parse(fs.readFileSync(descPath, 'utf8'))
    ctx.body = fs.readFileSync(path.join(base, `data.${desc.convertDataType}`), 'utf8')
    ctx.type = 'application/json'
}

const description = (ctx) => {
    let base = path.join(__dirname, '../data', ctx.params.name)
    ctx.body = fs.readFileSync(path.join(base, 'config.json'), 'utf8')
    ctx.type = 'application/json'
}

module.exports = {
    queryData,
    description
}