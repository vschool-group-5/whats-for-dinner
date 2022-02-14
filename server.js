const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const portNumber = 9000

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/whats-for-dinner-db", () => console.log("Connected to the DB"))

// app.use("/foods", require("./routes/foods"))
app.use("/user", require("./routes/user"))
// app.use("/recipe", require("./routes/recipe"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({"error": err.message})
})

app.listen(portNumber, () => {
    console.log(`Server running on port ${portNumber}`)
})
