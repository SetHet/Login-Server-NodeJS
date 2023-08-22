async function authToken(req, res, next) {
    const auth = req.headers.authorization
    if (auth) {
        list = auth.split(' ')
        if (list.length !== 2) {
            console.error('ERROR: Authorization not have 2 parts')
            return next()
        }
        if (list[0] === 'Bearer'){
            req.token = list[1]
        }
    }
    return next()
}

module.exports = authToken