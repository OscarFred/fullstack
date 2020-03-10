const cors = require('cors')
const express = require('express')
const sqlite = require('sqlite')

const app = express()

app.use(cors())

let database

sqlite.open('fancydb.sqlite')
    .then(database_ => {
        database = database_
    })


app.get('/', (request ,response) => {
    database.all('SELECT * FROM dadjokes')
        .then(jokes => {
            response.send(jokes)
        })
    // response.send([
    //     { a: true, b: 5, c: 'hej' },
    //     { a: true, b: 2, c: 'hej' },
    //     { a: true, b: 3, c: 'hej' }
    // ])
})

app.listen(3000)