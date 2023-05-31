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
    const user = await Users.findOne({ username });

    // If user was found, compare the password our user typed in with the hashed password we have stored for the user
    if (user && (await user.matchPassword(password))) {
      res.locals.user = {
        username: user.username,
        notes: user.notes,
        duckColor: user.duckColor
      };
      return next();
    } else {
      return next({
        log: 'Bad Username', // displays only to server
        status: 401,
        message: { err: 'wrong login credentials' },
      });
  }
  } catch (err) {
    // Handle error
    return next({
      log: `Error in userController.verifyUser${err}`,
      message: {
        log: `Error in userController.verifyUser${err}`,
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = userController;
