const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    return bcrypt.hashSync(password);
};

const compareHash = (password, hashedPassword) =>{
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {hashPassword, compareHash}