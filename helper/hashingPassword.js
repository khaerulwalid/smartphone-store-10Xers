let bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    let hash = bcrypt.hashSync(password, 8);
    return hash
}

const checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash); // true
}


module.exports = {
    hashPassword,
    checkPassword
}