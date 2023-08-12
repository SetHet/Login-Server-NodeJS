const { Pool } = require('pg')
const config =  require('./../config/config')

const USER = encodeURIComponent(config.db.db_postgres.user)
const PASSWORD = encodeURIComponent(config.db.db_postgres.password)

const URI = `postgres://${USER}:${PASSWORD}@${config.db.db_postgres.host}:${config.db.db_postgres.port}/${config.db.db_postgres.name}`

const pool = new Pool({
    connectionString: URI
})

pool.on('error', (err) => console.error('>>> Error postgres: \n' + err))

module.exports = pool