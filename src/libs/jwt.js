const config = require('./../config/config')
const jose = require('jose')
const { sha256 } = require('./encript')

const secret = jose.base64url.decode(sha256(config.jwt.key))


async function Verify(jwt){
    const real = await jose.jwtVerify(jwt, secret)
    return real
}

async function Create(json){
    const jwt = await new jose.EncryptJWT(json)
    .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
    .setIssuedAt()
    .setIssuer('server')
    .setAudience('client')
    .setExpirationTime('2h')
    .encrypt(secret)

    return jwt
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
