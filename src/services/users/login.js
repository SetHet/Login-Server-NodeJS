const {encriptPassword} =  require('../../libs/encript')
const pool = require('../../libs/postgres.pool')
const {Create: JWTCreate} = require('../../libs/jwt')

async function login (req, res) {
    console.log(req.body)
    const {email, password} = req.body

    const hashpassword = encriptPassword(password)

    const query = `SELECT * FROM users WHERE (email = '${email}' AND password_encript = '${hashpassword}');`

    const rta = await pool.query(query)
    console.log('++++++++++++++++++++++++++++') 

    if (rta.rowCount > 0) {
        const {rowCount, rows, fields} =  rta
        console.log({rowCount, rows, fields})

        const row = rows[0]

        const json = {
            id: row.id,
            name: row.name,
            email: row.email
        }

        const jwt = await JWTCreate(json)

        res.status(200).json({
            jwt,
            message: 'correct login'
        })   
    }
    else {
        res.status(400).json({
            message: 'incorrect login'
        })
    }
}

module.exports = login