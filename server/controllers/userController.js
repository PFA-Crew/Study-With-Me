const bcrypt = require('bcryptjs');
const { Users } = require('../models/userModel');

const userController = {};

// User creator middleware
userController.createUser = async (req, res, next) => {
  try {
    // Deconstruct username and password from our request body
    const { username, password } = req.body;
    // Add a new user in our mongoDB document
    const createdUser = await Users.create({
      username,
      password,
    });

    // Save our new user to response locals to send to our frontend
    res.locals = createdUser;

    // Move to our next middleware
    return next();
  } catch (err) {
    // Handle error
    return next({
      log: `Error in userController.createUser${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

// User verification middleware
userController.verifyUser = async (req, res, next) => {
  try {
    // Deconstruct username and password from our request body
    const { username, password } = req.body;

    // Find our user in our mongoDB document based off username
    const dbCheck = await Users.findOne({ username });

    // Check if our user exists, if they dont return to out global error handler
    /**
     * TODO: adjust this so if the username or password don't exist they send the error back to the frontend in the same timeframe
     * ie. if the username is incorrect, it should take the same amount of time as an incorect password so malicious actors
     *  can't determine that a password is correct by timing the response
     */
    if (!dbCheck) {
      return next({
        log: 'bad username', // displays only to server
        status: 400,
        message: { err: 'wrong login credentials' },
      });
    }

    // Deconstruct duckColor and notes from our user
    const { duckColor, notes } = dbCheck;
    // Compare the password our user typed in with the hashed password we have stored for the user
    const pwCheck = await bcrypt.compare(password, dbCheck.password);

    // If the passwords match store user data, not including password, in response locals to send to front end
    if (pwCheck) {
      res.locals.user = { username, notes, duckColor };
      return next();
    }

    // If the passwords dont match send an error to our global error handler
    return next({
      log: 'bad password', // displays only to server
      status: 400,
      message: { err: 'wrong login credentials' },
    });
  } catch (err) {
    // Handle error
    return next({
      log: `Error in userController.verifyUser${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = userController;
