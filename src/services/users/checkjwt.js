const {Verify} = require('../../libs/jwt')


async function checkJWT (req, res) {
    token = req.token
    console.log(token)
    const real = await Verify(token)
    console.log(real)
    res.json({message:real})
}

module.exports = checkJWT