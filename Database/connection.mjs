import mysql from 'mysql2'

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  database: 'example',
  user: 'root',
  password: ''
})

export default mysqlConnection