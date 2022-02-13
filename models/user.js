const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    diet: {
        type: [String]
    },
    allergies: {
        type: [String]
    }
})

module.exports = mongoose.model("UserModel", userSchema)