const errorHandler = (err, req, res, next) => {
    let message = "Internal Server Error"
    let status = 500

    switch(err.name) {
        case "Unauthorized":
            message = "Please login first"
            status = 401
            break
        case "UnauthorizedLogin":
            message = "Error invalid username or email or password"
            status = 401
            break
        case "JsonWebTokenError":
            message = "Invalid token"
            status = 401
            break
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            message = err.errors.map(el => {
                return el.message
            })
            status = 400
            break
        case "LoginValidationError":
            message = err.message
            status = 400
            break
    }

    res.status(status).json({message})
}

module.exports = errorHandler