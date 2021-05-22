const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const knex = require('knex')
const connection = require('./knexfile.js')['development']

const database = knex(connection)

const port = 9000

app.use(express.json())

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

app.get('/dogs', (request, response) => {
    database('dogs').select()
        .then(dogs => {
            response.json({dogs})
        })
    })

app.get('/dogs/:id', (request, response) => {
    database("dogs").select().where({id: request.params.id}).first()
        .then(dog => response.send( dog ))
})

app.post("/dogs", (request, response)=> {
    const dog = request.body
    console.log(request.params)
    database("dogs")
        .insert(dog)
        .returning("*")
        .then(dog => response.send(dog))
})


