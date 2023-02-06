const bcrypt = require('bcrypt')
const User = require('../models/user.model');
const mongoose = require('mongoose');



module.exports.create = (req, res, next) => {
  res.render('users/new')
}

module.exports.doCreate = (req, res, next) => {
  if(!req.body.password) {
    return res.render("users/new", {
      errors: { password: { message: "can't be blank"}},
      user: req.body
    })
  }
  User.create(req.body)
    .then(() => {
      res.redirect('/login')
    }).catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
          res.render('/login', { errors: err.errors, user: req.body })
      } else {
        next(err)
      }
    })
}


