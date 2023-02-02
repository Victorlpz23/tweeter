const Tweet = require('../models/tweet.model');

module.exports.list = (req, res, next) => {
  Tweet.find()
    .then((tweets) => {
      res.render('tweets/list', { tweets })
    })
    .catch((error) => console.log(error))
};


module.exports.detail = (req, res, next) => {
   Tweet.findById(req.params.id)
   .then((tweet) => {
    res.render('tweets/detail', { tweet })
  })
  .catch((error) => console.log(error))
};

module.exports.create = (req, res, next) => {
  res.render('tweets/new')
};

module.exports.Docreate = (req, res, next) => {
   Tweet.create(req.body)
   .then(() => {
    res.redirect('/tweets')
  })
  .catch((error) => console.log(error))
}

module.exports.update = (req, res, next) => {
  Tweet.findById(req.params.id)
  .then(() => {
   res.render('tweets/edit', { tweet })
 })
 .catch((error) => console.log(error))
}

module.exports.doUpdate = (req, res, next) => {
  Tweet.findByIdAndUpdate(req.params.id, req.body)
  .then((tweet) => {
   res.redirect('/tweets')
 })
 .catch((error) => console.log(error))
}

module.exports.doUpdate = (req, res, next) => {
  Tweet.findByIdAndDelete(req.params.id)
  .then((tweet) => {
   res.redirect('/tweets')
 })
 .catch((error) => console.log(error))
}

