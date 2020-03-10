const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

app.get('/', (request ,response) => {
    response.send([
        { a: true, b: 5, c: 'hej' },
        { a: true, b: 2, c: 'hej' },
        { a: true, b: 3, c: 'hej' }
    ])
})

app.listen(3000)