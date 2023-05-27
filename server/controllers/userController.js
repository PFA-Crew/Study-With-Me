const bcrypt = require('bcryptjs');
const { Users } = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const defaultColor = 'yellow';
    const createdUser = await Users.create({
      username,
      password,
      duckColor: defaultColor,
    });
    console.log(createdUser);
    res.locals = createdUser;
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
    const { duckColor, notes} = dbCheck
    const pwCheck = await bcrypt.compare(password, dbCheck.password);
    console.log(username);
    if (dbCheck && pwCheck) {
      console.log('logged in');
      res.locals.user = { username, notes, duckColor };
      return next();
    }
    return next({ log: 'bad password', message: 'wrong login credentials' });
  } catch (error) {
    // Handle error
    return next(error);
  }
};

module.exports = userController;
