'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const categoryRouter = require('./routes/category');
const recordRouter = require('./routes/record');
const graphRouter = require('./routes/graph');
const usersRouter = require('./routes/users');
const loginRouter = require('./passport/router');
const localStrategy = require('./passport/local');
const {jwtStrategy} = require('./passport/jwt');
const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

const app = express();

// Parse request body
app.use(express.json());

// Utilize the given `strategy`
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);


// Mount routers
app.use('/category', categoryRouter);
app.use('/record', recordRouter);
app.use('/graph', graphRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', loginRouter);


function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
