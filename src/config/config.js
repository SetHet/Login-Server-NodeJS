require('dotenv').config();

const config = {
    port: process.env.PORT,
    salt: process.env.SALT ?? 'apple',
    db: {
        name: process.env.DB,
        db_postgres: {
            name: process.env.DB_POSTGRES_NAME,
            host: process.env.DB_POSTGRES_HOST,
            port: process.env.DB_POSTGRES_PORT,
            user: process.env.DB_POSTGRES_USER,
            password: process.env.DB_POSTGRES_PASSWORD,
        }
    },
}

module.exports = config