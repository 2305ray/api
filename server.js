import express from 'express'

const app = express()
app.use(express.json())

const users = []

//precisa do tipo de rota (http) e endereço (url)
//criar uma rota
app.post('/users', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.json(users)
}) 

app.listen(3000)