import express from 'express'
import executeQuery from '../Database/databaseFunctions.mjs'
const router = express.Router()

router.post('/newUser', async (req, res) => {
  console.log(req.body)

  const sql = `INSERT INTO users (email, key_password, user_name, last_name, nick_name)
  VALUES (?, ?, ?, ?, ?);`

  //TODO: iterar las llaves del req.body para insertar el valor de las llaves en un arreglo y pasar el arrelgo como el segundo parametro de la funcion executeQuer
  // const data = ['Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006']

  await executeQuery(sql, data)
    .then(res.json({message: "Usuario registrado correctamente"}))
    .catch((err) => {
      console.log(err)
      res.status(500)
    })
})

export default router