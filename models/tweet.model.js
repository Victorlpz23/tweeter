const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  user: {
    type: "String",
    required: true,
  },
  message:  {
    type: "String",
    required: true,
    maxLength: 140,
  },
  likes: { 
    type: Number,
    default: 0 
  }
},
{ timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;