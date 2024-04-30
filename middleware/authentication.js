const { verifyToken } = require("../helper/jsonwebToken")
const {User} = require("../models/index")

const auntetication = async(req, res, next) => {
    try {
      const {authorization} = req.headers
  
      if(!authorization) {
        throw {name: "Unauthorized"}
      }
  
      const token = authorization.split(" ")[1]
      const verified = verifyToken(token)
      
      const dataUser = await User.findByPk(verified.id)
      
  
      if(!dataUser) {
        throw {name: "Unauthorized"}
      }
  
      req.user = {
        id: verified.id,
      }
  
      next()
    } catch (err) {
      next(err)
    }
  }

module.exports = auntetication