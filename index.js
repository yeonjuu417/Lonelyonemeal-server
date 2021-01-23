const express = require("express");
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("./models");
const app = express();
const usersRouter = require('./routes/user');
const socialsRouter = require('./routes/social');

const port = 3001;//포트번호수정 !!!!!!!

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.use(
  cors({
    origin: 'https://onemeal.xyz',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.set('trust proxy',1)

app.use(session({
  secret: '@codestates',
  resave: false,
  saveUninitialized: true,
  secure: true,
  cookie: {
    maxAge: 24 * 6 * 60 * 10000,
    httpOnly: true,
    secure: true,
    sameSite : 'none',
  }
}));

app.use(cookieParser('@codestates'));

app.get('/', (req, res) => {
  res.status(200).send('Success');
});

app.use('/userImg', express.static('./controller/users/userImg'));
app.use('/users', usersRouter);
app.use('/socials', socialsRouter)

app.listen(port); 
module.exports = app;
