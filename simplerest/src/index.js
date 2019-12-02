const express = require("express")
const db = require("../db/db")
const bodyParser = require("body-parser")
// Setup express app
const app = express()

// Parse incoming req data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/api/hello', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Hello from the outsideeeee'
    })
})

app.get('/api/todos', (req, res) => {
    res.status(200).send({
        success: true,
        message: "todos se wes isok lur",
        data: db
    })
})

app.post('/api/todos', (req, res) => {
    const todo = {
        id: db[db.length - 1].id + 1,
        title: req.body.title,
        description: req.body.description
    }

    if(!req.body.title) {
        return res.status(400).send({
            success: false,
            message: "Tolong isi title"
        })
    } else if (!req.body.description) {
        return res.status(400).send({
            success: false,
            message: "Tolong isi description"
        })
    }

    db.push(todo)

    return res.status(201).send({
        success: true,
        message: "todos se wes mlebu lur",
        data: todo
    })
})

app.get('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    db.map((todo) => {
        if(todo.id === id) {
            return res.status(200).send({
                success: true,
                message: "todo retrieved successfully",
                data: todo
            })
        }
    })
    return res.status(404).send({
        success: false,
        message: "todos not found"
    })
})

app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    db.map((todo, index) => {
        if(todo.id === id) {
            return res.status(200).send({
                success: true,
                message: "todo retrieved successfully",
                data: todo
            })
        }
    })
    return res.status(404).send({
        success: false,
        message: "todos not found"
    })
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(
        `server running on port ${PORT}`
    );
    
})

