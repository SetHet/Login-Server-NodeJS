const crypto = require('node:crypto')
const config = require('../config/config')

async function encriptPassword(password){
    const password_enc = crypto.createHash('sha256', password + config.salt).digest('base64')
    return password_enc
}

module.exports = { encriptPassword }