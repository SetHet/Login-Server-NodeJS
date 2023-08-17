const pool = require('../../libs/postgres.pool')

module.exports = {
    getUsers,
}

async function getUsers (req, res) {
    const query_getall = 'SELECT * FROM users'
    const rta = await pool.query(query_getall)

    res.json(rta.rows)
}