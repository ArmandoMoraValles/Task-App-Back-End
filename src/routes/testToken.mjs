import express from 'express'
import executeQuery from '../Database/databaseFunctions.mjs'

const router = express.Router()

router.get('/hello', async(req,res)=> {
  res.json({mensaje: 'Hola'})
})

router.post('/post', (req,res) => {
  res.json({mensaje: 'Todo en orden', ...req.authData})
})

export default router