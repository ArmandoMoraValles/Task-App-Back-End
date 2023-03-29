import jwt from 'jsonwebtoken'

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']

  if(bearerHeader) {
    const token = bearerHeader.split(' ')[1]
    req.token = token
    jwt.verify(req.token, 'secretKey', (err, authData) => {
      if(err){
        res.sendStatus(403)
      } else {
        req.authData = authData
        next()
      }
    })
  } else {
    res.sendStatus(403)
  }
}

export default verifyToken