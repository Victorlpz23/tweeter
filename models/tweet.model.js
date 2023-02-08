const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  message: {
    type: "String",
    required: [true, "message is required"],
    maxLength: [250, "max 250 chars"]
  },
  user: {
    type: "String",
    required: [true, "user is required"]
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