'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const categoryRouter = require('./routes/category');
const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

const app = express();

// Parse request body
app.use(express.json());

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

app.get('/graph/:userId',(req,res,next) => {
  let coordinates = [
    [1,10],
    [2,20],
    [3,30]
  ];
  res.json({coordinates});
});

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
