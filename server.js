const express = require("express")
const app = express()
const morgan = require("morgan")
const portNumber = 9000

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/whats-for-dinner", () => console.log("Connected to the DB"))

// app.use("/guitars", require("./routes/inventory"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({"error": err.message})
})

app.listen(portNumber, () => {
    console.log(`Server running on port ${portNumber}`)
})
