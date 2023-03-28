const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    database: '',
    user: 'root',
    password: ''
})

mysqlConnection.connect((err) => err ? console.log(err) : console.log('Database connected'))

module.exports = mysqlConnection