const express = require('express')
const config = require('./config/config')
const cors =  require('cors')

const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

app.use(require('./middlewares/info-request'))
app.use(require('./middlewares/auth-token'))

app.get('/', (req, res) => {
    res.json({message:'correct connection'})
})

require('./services/users')(app)
require('./services/admin')(app)

app.listen(config.port, () => {
    console.log("puerto a la escucha");
    console.log("http://localhost:" + config.port);
})