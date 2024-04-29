const {Discount} = require("../models/index")

class DiscountController {
    static async PostDiscount(req, res, next) {
        try {
            console.log(req.body, "<<Body Discount");
            const {name, description, discount_percent} = req.body

            const data = await Discount.create({name, description, discount_percent})

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DiscountController