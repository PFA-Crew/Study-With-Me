const Users = require('../models/userModel');

const userController = {};

// User creator middleware
userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      throw new Error('Must include username, email, and password');
    }
    if (await Users.findOne({ username })) {
      throw new Error('username is already taken');
    }

    const newUser = await Users.create({ username, password });
    res.locals.userId = newUser._id;
    res.locals.username = newUser.username;
    next();
  } catch (err) {
    next(err);
  }
};

// User verification middleware
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error(
        'Request is missing one of the following fields: usernameOrEmail, password',
      );
    }

    // Find our user in our mongoDB document based off username
    const foundUser = await Users.findOne({ username });

    // If user was found, compare the password our user typed in with the hashed password we have stored for the user
    if (foundUser && (await foundUser.matchPassword(password))) {
      res.locals.userId = foundUser._id;
      res.locals.username = foundUser.username;
      return next();
    } else {
      throw new Error('wrong login credentials');
    }
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
