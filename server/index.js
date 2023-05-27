const express = require('express');
const authRouter = require('./routes/auth');

// Our server port
const PORT = 1234;

// Create an express app
const app = express();

// Format JSON into readable code
app.use(express.json());

// Send all auth urls to authRouter
app.use('/auth', authRouter);

// 404 handler
app.use('*', (req, res) => {
  console.log('catch all')
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  // Default error sent if no known error is caught
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {
      err: 'An error occured',
    },
  };
  // Assign our error object to 'error
  const error = Object.assign(defaultErr, err);
  // Send out error log to the server
  console.log(error.log);
  // Send our status code and error message to the user
  res.status(error.status).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


module.exports = app;
