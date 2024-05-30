require('dotenv').config()
const User = require('../modules/users')
module.exports = async (req, res, next) => {
    try {
      const user = await User.findById(req.userId)
      if (!user) {
        return res.status(400).json({ error: 'Incorrect user' })
      }
      req.user = user
      next()
    } catch (error) {
      next(error)
    }
}