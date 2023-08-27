const {Verify} = require('../../libs/jwt')

async function checkJWT (req, res) {
    //console.log(req)
    token = req.token
    console.log(token)
    const real = await Verify(token)
    res.json({message:real})
}

module.exports = checkJWT