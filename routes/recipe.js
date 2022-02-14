const express = require("express")
const RecipeModel = require("../models/recipe")
const recipe = express.Router()

recipe.route("/")
    .get((req, res, next) => {
        RecipeModel.find((err, recipes) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(recipes)
        })
    })
    .post((req, res, next) => {
        const newRecipe = new RecipeModel(req.body)
        newRecipe.save((err, savedRecipe) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedRecipe)
        })
    })

recipe.route("/:recipeId")
    .get((req, res, next) => {
        RecipeModel.findOne(
            {_id: req.params.recipeId},
            (err, foundRecipe) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundRecipe)
        })
    })
    .put((req, res, next) => {
        RecipeModel.findOneAndUpdate(
            {_id: req.params.recipeId},
            req.body,
            { new: true },
            (err, updatedRecipe) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedRecipe)
        })
    })
    .delete((req, res, next) => {
        RecipeModel.findOneAndDelete(
            {_id: req.params.recipeId},
            (err, deletedRecipe) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedRecipe)
        })
    })

module.exports = recipe