const express = require("express")
const UserModel = require("../models/user")
const user = express.Router()

user.route("/")
    .post((req, res, next) => {
        const newUser = new UserModel(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })
    })

user.route("/:userId")
    .get((req, res, next) => {
        UserModel.findOne(
            {_id: req.params.userId},
            (err, foundUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundUser)
        })
    })
    .put((req, res, next) => {
        UserModel.findOneAndUpdate(
            {_id: req.params.userId},
            req.body,
            { new: true },
            (err, updatedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        })
    })
    .delete((req, res, next) => {
        UserModel.findOneAndDelete(
            {_id: req.params.userId},
            (err, deletedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedUser)
        })
    })

module.exports = user