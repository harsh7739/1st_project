const express = require("express")
require("dotenv").config()
const { connection } = require("./db")
const { userRouter } = require("./route/user.route")
const { noteRouter } = require("./route/note.route")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use("/notes",noteRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server is running...")

    } catch (error) {
        console.log(error)
    }
})
module.exports = app