const {Verify} = require('../../libs/jwt')

async function checkJWT (req, res) {
    //console.log(req)
    token = req.token
    console.log(token)
    const real = await Verify(token)
    res.json({message:'in process: check JWT'})
}

module.exports = checkJWT