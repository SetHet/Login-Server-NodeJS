const checkjwt = require('./checkjwt')
const login = require('./login')
const register = require('./register')
const update = require('./update')

function routing(root) {
    root.get('/user/checkjwt', checkjwt)
    root.get('/user/login', login)
    root.post('/user/register', register)
    root.put('/user/update', update)

    require('./createtable')()
}

module.exports = routing