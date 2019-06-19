import { createUserController, findAllUsersController } from './controllers/users'
import makeHandler from './operator'

const express = require("express")
const http = require("http")
const bodyParser = require("body-parser")
const app = express()

let server = http.createServer(app)

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send(JSON.stringify("Hello world"))
})
app.post("/user", makeHandler(createUserController))
app.get("/user", makeHandler(findAllUsersController))

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})