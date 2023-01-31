const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  user: {
    type: "String",
    require: "User is require"
  },
  message:  {
    type: "String",
    require: "Message is require"
  },
  createdAt:  {
    type: "String",
    require: "Date is require"
  },
  fav:  {
    type: "Boolean",
  },
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;