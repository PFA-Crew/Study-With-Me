const { Users } = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const createdUser = await Users.create({ username, password });
    console.log(createdUser);
    res.locals.userID = createdUser;
    return next();
  } catch (error) {
    // Handle error
    return next(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    // Deconstruct data from request body
    const { username, password } = req.body;
    const dbCheck = await Users.findOne({ username });
    const pwCheck = await bcrypt.compare(password, dbCheck.password);
    console.log(username);
    if (dbCheck && pwCheck) {
      console.log('logged in');
      // res.locals.userID = dbCheck._id;
      return next();
    }
    return next({ log: 'bad password', message: 'wrong login credentials' });
  } catch (error) {
    // Handle error
    return next(error);
  }
};

module.exports = userController;
