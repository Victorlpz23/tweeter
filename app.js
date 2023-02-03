require('dotenv').config()

require('./configs/db.config');

const express = require('express');
const app = express();
const logger = require('morgan');

app.use(express.urlencoded());
app.use(logger('dev'));


app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

const router = require('./configs/router.config');
app.use(router);


app.use((err, req, res, next) => {
  console.error(err)
  res.status(500)
  res.send("Ops, something went wrong!")
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application is running at port ${port}`));