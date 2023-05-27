const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT = 1234;

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  // figure out what to do with base route
  res.send('howdy howdy');
});

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {
      err: 'An error occured',
    },
  };
  const error = Object.assign(defaultErr, err);
  console.log(error.log);
  res.status(error.status).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
