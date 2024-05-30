const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
  let token = null
  const authorization = req.get('authorization')
  
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_WORD)
    if (!decodedToken.id) {
      return res.status(401).send({ error: 'Missing or invalid token' })
    }
    req.userId = decodedToken.id
    next()
  } catch (error) {
    return res.status(401).send({ error: 'Missing or invalid token' })
  }
}
