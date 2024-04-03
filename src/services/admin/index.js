const { getUsers } = require('./users')

async function routing (root) {
    root.get('/admin/users', getUsers)
}

module.exports = routing
