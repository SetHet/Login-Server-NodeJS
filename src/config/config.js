require('dotenv').config();

const config = {
    port: process.env.PORT,
    jwt: {
        key: process.env.JWT_PRIVATE_KEY,
    },
    salt: process.env.SALT ?? 'apple',
    passphrase: process.env.PASSPHRASE ?? '',
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