const express = require("express")
const app = express()
const bodyParser = require("body-parser")


//rotas
const index = require("./routes/index")
const user = require("./routes/user")


app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json())

app.use("/", index)
app.use("/user", user)




module.exports = app