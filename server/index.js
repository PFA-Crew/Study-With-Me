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
app.use((err, req, res) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
