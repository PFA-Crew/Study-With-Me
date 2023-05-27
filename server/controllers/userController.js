const { Users } = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const createdUser = await Users.create(req.body);
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
    const dbCheck = await Users.findOne({ username: req.body.username });
    const pwCheck = await dbCheck.password === req.body.password;
    console.log(req.body.username);
    if (dbCheck && pwCheck) {
      console.log('logged in');
      // res.locals.userID = dbCheck._id;
      return next();
    }
  } catch (error) {
    // Handle error
    return next(error);
  }
};

module.exports = userController;
