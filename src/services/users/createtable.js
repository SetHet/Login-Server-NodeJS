const pool =  require('../../libs/postgres.pool')

async function create_table () {

    try {
        const create_db_table = `CREATE TABLE IF NOT EXISTS users (
            id serial PRIMARY KEY,
            name VARCHAR (100) NOT NULL,
            email VARCHAR (100) NOT NULL,
            password_encript VARCHAR (255) NOT NULL
        );
        `
        const created = await pool.query(create_db_table)
        //console.log(created)
        if (created.rowCount === 1){
            //console.log('Table users created')
        } else if (created.rowCount === null) {
            //console.log('Table users exist')
        }
    } catch(error) {
        console.error('Error on create table users: \n' + error)
    }
}
 
module.exports = create_table