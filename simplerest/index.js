const express = requre("express")
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

const PORT = 8080

app.listen(PORT, () => {
    console.log(
        `server running on port ${PORT}`
    );
    
})

