const mongoose = require("mongoose")
const { Schema } = mongoose

const recipeSchema = new Schema({
    recipeLink: {
        type: String,
    },
    rating: {
      type: Number,
      default: 1,
      enum: [1, 2, 3]
    },
    comments: {
      type: String
    }
})

module.exports = mongoose.model("RecipeModel", recipeSchema)
