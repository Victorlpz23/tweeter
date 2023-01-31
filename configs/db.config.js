const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tweeter'

mongoose.connect(MONGODB_URI)
  .then(() =>  {
     console.info(`Application is succesfully connected to the database ${MONGODB_URI}`)
  })
  .catch((error) => console.error(error));