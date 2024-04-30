const { Op } = require("sequelize")
const {Smartphone} = require("../models/index")

class SmartphoneController {
    static async postSmartphone(req, res, next) {
        try {
            const {type, price, image_url, quantity, description, brand, Discount_Id} = req.body

            const data = await Smartphone.create({type, price, image_url, quantity, description, brand, Discount_Id})

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async getSmartphone(req, res, next) {
        try {
            const {search} = req.query

            let option = {}

            if(search) {
                option.where = {
                    type: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            }

            const data = await Smartphone.findAll(option)

            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async putSmartphone(req, res, next) {
        try {
            const {type, price, image_url, quantity, description, brand, Discount_Id} = req.body

            const {id} = req.params

            await Smartphone.update({type, price, image_url, quantity, description, brand, Discount_Id}, {
                where: {
                    id
                }
            })

            let data = await Smartphone.findByPk(id)

            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async deleteSmartphone(req, res, next) {
        try {
            console.log("Masuk Delete");
            const {id} = req.params

            let data = await Smartphone.findByPk(id)

            if(!data) {
                throw {name: "NotFound"}
            }

            await Smartphone.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: "Success delete"
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = SmartphoneController