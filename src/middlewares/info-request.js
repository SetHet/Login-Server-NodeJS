tab = '\t'

async function infoRequest(req, res, next) {
    //console.info(req)
    console.info('NEW Request')
    console.info(tab + req.originalUrl)
    next()
}

module.exports = infoRequest