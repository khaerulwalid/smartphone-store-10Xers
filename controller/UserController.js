const { checkPassword } = require("../helper/hashingPassword")
const { createToken } = require("../helper/jsonwebToken")
const {User} = require("../models/index")

class UserController {
    static async registerUser(req, res, next) {
        try {
            const {name, email, password} = req.body

            let data = await User.create({name, email, password})

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async loginUser(req, res, next) {
        try {
            const {email, password} = req.body

            if(!email) {
                throw {name: "LoginValidationError", message: "Email is require"}
            }

            if(!password) {
                throw {name: "LoginValidationError", message: "Password is require"}
            }

            let user = await User.findOne({
                where: {
                    email
                }
            })

            if(!user) {
                throw {name: "UnauthorizedLogin"}
            }

            const comparePassword = checkPassword(password, user.password)

            if(!comparePassword) {
                throw {name: "UnauthorizedLogin"}
            }

            // ! Bikin token
            let access_token = createToken({
                id: user.id
            })

            res.status(200).json({access_token})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController