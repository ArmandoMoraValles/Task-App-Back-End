import mysqlConnection  from './connection.mjs'

const executeQuery = async (sql, args) => {
    return await new Promise((resolve, reject) => {
        mysqlConnection.query(sql, args, (err, rows) => {
          if(err) reject(err)
          resolve(rows)
        })
    })
}

export default executeQuery