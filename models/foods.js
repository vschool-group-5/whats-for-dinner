const mongoose = require("mongoose")
const { Schema } = mongoose

const foodsSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    items: {
        type: [String]
    }
})

module.exports = mongoose.model("FoodsModel", foodsSchema)