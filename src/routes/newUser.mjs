import express from 'express'
import bcrypt from 'bcrypt';
import executeQuery from '../Database/databaseFunctions.mjs'
const router = express.Router()
const saltRounds = 10;

router.post('/newUser', async (req, res) => {
  console.log(req.body)

  const sql = `INSERT INTO users (email, key_password, user_name, last_name, nick_name)
  VALUES (?, ?, ?, ?, ?);`

  // const data = ['Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006']

  const data = Object.values(req.body)

  bcrypt.hash(data[1], saltRounds, async function(err, hash) {
    if(err){
      console.log(err)
      res.status(500)
    }

    data[1] = hash

   const results = await executeQuery(sql, data)
    .then(res.json({message: "Usuario registrado correctamente"}))
    .catch((err) => {
      console.log(err)
      res.status(500)
    })
    console.log(results.insertId)
});

  
})

export default router