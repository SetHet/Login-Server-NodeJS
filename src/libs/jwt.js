const config = require('./../config/config')
const jwt = require('jsonwebtoken')
const fs = require('node:fs')
const crypto =  require('node:crypto')

const privateKey = fs.readFileSync(__dirname+'/../keys/.private.key', { encoding: 'utf8', flag: 'r' })
const publicKey = fs.readFileSync(__dirname+'/../keys/.public.key.pem', { encoding: 'utf8', flag: 'r' })
// console.log(privateKey)
// console.log(publicKey)

async function Verify(token){
    //const real = await jose.jwtVerify(jwt, secret)
    let real
    jwt.verify(token, publicKey, function(err, decoded) {
        if (decoded) {
            real = decoded
        }
        //console.log(decoded) // bar
        console.log(err)
      })
    console.log('resultado')
    console.log(real)
    return real
}

async function Create(json){
    console.log(json)

    var claim = {
        ...json,
        admin: false
    }

    var token = jwt.sign(claim, {key: privateKey, passphrase:''}, { algorithm: 'RS256', expiresIn: '1 day' });
    //var token = jwt.sign(claim, privateKey);

    return token
}

async function Read(jwt){
    const json = await jose.jwtDecrypt(jwt, secret)
    return json
}

module.exports = {
    Verify,
    Create,
    Read
}
