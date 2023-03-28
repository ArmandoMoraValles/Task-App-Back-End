import express from 'express';
import mysqlConnection from './Database/connection.mjs';
import boxen from 'boxen';

const app = express();
const port = 3000;

console.clear();

app.use(express.json());
//app.use('/api', require('./src/routes/RegisterGame.js'))

app.listen(port, () =>
  console.log(
    boxen(`Api ready, listen on port: ${port}`, {
      padding: 1,
      borderColor: 'green',
      margin: 1,
    })
  )
);

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
);

export default app;
