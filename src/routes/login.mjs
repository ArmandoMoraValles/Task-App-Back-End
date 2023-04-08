import express from 'express'
import executeQuery from '../Database/databaseFunctions.mjs'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', (req,res) => {
  const user = {
    id: 1,
    name: 'Armando',
    email: 'armando@email.com',
    }

  jwt.sign(user, 'secretKey2', (err, token) => {
    res.json( { mensaje: 'Token generado con exito', token, } )
  })
})

export default router
