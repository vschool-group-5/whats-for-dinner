const mongoose = require("mongoose")
const { Schema } = mongoose

const commentSchema = new Schema({
    author: String,
    comment: String,
    date: Date
})

const recipeSchema = new Schema({
    recipeId: {
        type: String,
        required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      enum: [0, 1, 2, 3]
    },
    comments: {
      type: [commentSchema]
    }
})

module.exports = mongoose.model("RecipeModel", recipeSchema)
