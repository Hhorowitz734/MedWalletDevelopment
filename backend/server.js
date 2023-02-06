const express = require('express')
const cors = require('cors')
const app = express()
const port = 8383

app.use(cors())

app.get('/gettest', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}`))