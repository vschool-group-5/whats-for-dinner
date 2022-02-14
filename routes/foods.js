const express = require("express")
const FoodsModel = require("../models/foods")
const foods = express.Router()

foods.route("/")
    .get((req, res, next) => {
        FoodsModel.find((err, foods) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foods)
        })
    })
    .post((req, res, next) => {
        const newFoods = new FoodsModel(req.body)
        newFoods.save((err, savedFoods) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedFoods)
        })
    })

foods.route("/:foodsId")
    .get((req, res, next) => {
        FoodsModel.findOne(
            {_id: req.params.foodsId},
            (err, foundFoods) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundFoods)
        })
    })
    .put((req, res, next) => {
        FoodsModel.findOneAndUpdate(
            {_id: req.params.foodsId},
            req.body,
            { new: true },
            (err, updatedFoods) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedFoods)
        })
    })
    .delete((req, res, next) => {
        FoodsModel.findOneAndDelete(
            {_id: req.params.foodsId},
            (err, deletedFoods) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedFoods)
        })
    })

module.exports = foods