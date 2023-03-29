import express from 'express'
import mysqlConnection from './src/Database/connection.mjs';
import boxen from 'boxen'
import login from './src/routes/login.mjs'
import verifyToken from './src/middlewars/verifyToken.mjs';
import testToken from './src/routes/testToken.mjs'

const app = express()
const port = 3000

console.clear()

app.use(express.json())
app.use('/api', login)

app.use(verifyToken)
app.use('/api', testToken)

app.listen(port, () =>
  console.log(
    boxen(`Api ready, listen on port: ${port}`, {
      padding: 1,
      borderColor: 'green',
      margin: 1,
    })
  )
)

mysqlConnection.connect((err) =>
  err
    ? console.log(err)
    : console.log(
      boxen('successful connection to database', {
        padding: 1,
        borderColor: 'blue',
        margin: 1,
      })
    )
)

export default app
