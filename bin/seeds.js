require('../configs/db.config');

const Tweet = require('../models/tweet.model');

Tweet.deleteMany()
  .then(() => {
    for (let i = 0; i <= 10; i++) {
      Tweet.create({
        user: `User ${i}`,
        message: `Message ${i}`,
      }).then((tweet) => {
        console.log(`tweet ${i} created`)
      }).catch((error) => console.error(error))
    }
})
