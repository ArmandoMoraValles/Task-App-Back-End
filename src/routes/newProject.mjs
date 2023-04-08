import express from 'express'
import executeQuery from '../Database/databaseFunctions.mjs'
const router = express.Router()

router.post('/newProject', async (req, res) => {

    const sql = `INSERT INTO projects (project_name)
    VALUES (?);`

    const data = Object.values(req.body)

    const results = await executeQuery (sql, data)
      .then(res.json({message: "Proyecto registrado correctamente"}))
      .catch((err) => {
        console.log(err)
        res.status(500)
    })
})

export default router