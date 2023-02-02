const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  user: {
    type: "String",
    required: true,
  },
  message:  {
    type: "String",
    require: true,
    maxLength: 140,
  },
  // createdAt:  {
  //   type: Date,
  //   default: Date.now,
  // },
  likes: { 
    type: Number,
    default: 0 
  }
},
{ timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;