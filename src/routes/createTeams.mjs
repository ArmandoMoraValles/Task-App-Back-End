import express from 'express'
import executeQuery from '../Database/databaseFunctions.mjs'
const router = express.Router()

router.post('/createTeams', async (req, res) => {
    res.json({
        "mensaje" : "ruta funcionando"
    })

    const sql = `INSERT INTO job_teams (team_name)
    VALUES (?);`

    const data = Object.values(req.body)

    const results = await executeQuery (sql, data)
    .then(res.json({message: "Equipo creado correctamente"}))
    .catch((err) => {
      console.log(err)
      res.status(500)
    })
})

export default router