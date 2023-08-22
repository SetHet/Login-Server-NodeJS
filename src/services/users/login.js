const {Create} = require('../../libs/jwt')

async function login (req, res) {
    console.log(req.body)
    res.json({message:'in process: login'})
}

module.exports = login