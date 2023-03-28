const mysqlConnection = require('./connection')

const executeQuery = async (sql, args) => {
    return await new Promise((resolve, reject) => {
        mysqlConnection.query(sql, args, (err, rows) => {
            if(err) reject(err)
            resolve(rows)
        })
    })
}

module.exports = executeQuery