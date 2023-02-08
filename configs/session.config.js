const session = require('express-session');



module.exports.session = session({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized : true,
  cookie: { secure: true }
})