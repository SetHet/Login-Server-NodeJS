const pool = require('./../../libs/postgres.pool')
const { encriptPassword } = require('../../libs/encript')

async function register (req, res) {
    console.log('New register:')
    const body = req.body
    //console.log('>Body:')
    //console.log(body)

    const password_enc = await encriptPassword(body.password)

    const query_create_user = `INSERT INTO users
        (name, email, password_encript) 
        VALUES ('${body.name}', '${body.email}', '${password_enc}');
    `

    try {
        const rta = await pool.query(query_create_user)
        if (!!rta.rowCount && rta.rowCount > 0) {
            console.log('User created')
            res.status(200).json({message:'Usuario creado'})
        } else {
            console.log('Algun problema al crear el usuario:')
            console.log(rta)
            res.status(500).json({message:'Algun problema al crear el usuario'})
        }
    } catch (err) {
        console.error("Error al crear un usuario")
        console.error(err)
        res.status(500).json({message:'Error al crear el usuario'})
    }
    
    
}

module.exports = register