import mysql from 'mysql2'

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  database: 'software',
  user: 'root',
  password: 'password'
})

export default mysqlConnection