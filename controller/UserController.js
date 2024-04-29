const {User} = require("../models/index")

class UserController {
    static async registerUser(req, res, next) {
        try {
            console.log(req.body, "<<<Req Body");
            const {name, email, password} = req.body

            let data = await User.create({name, email, password})

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController