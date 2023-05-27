const User = require('../models/userModel');
const Note = require('../models/noteModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    // Deconstruct data from request body
    const createdUser = await User.create(req.body);
    // username, password, layouts data
    // Process obtained data
    console.log(createdUser);
    res.locals.userID = createdUser;
    // Persist data to res.locals
    // Invoke next middleware
    return next();
  } catch (error) {
    // Handle error
    return next(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    // Deconstruct data from request body
    const dbCheck = await User.findOne({ username: req.body.username });
    const pwCheck = await dbCheck.password === req.body.password;
    console.log(req.body.username);
    if (dbCheck && pwCheck) {
      console.log('logged in');
      // res.locals.userID = dbCheck._id;
      next();
    }
  } catch (error) {
    // Handle error
    return next(error);
  }
};

// get users notes
userController.getUserNotes = async (req, res, next) => {
  try {
    const { noteIDs } = req.body.noteIDs;
    const userNotes = await Promise.all(noteIDs.map(async (id) => {
      await Note.find({ noteID: id });
    }));
    // Process obtained data
    // Persist data to res.locals
    res.locals.notes = userNotes;
    // Invoke next middleware
    return next();
  } catch (error) {
    // Handle error
    return next(error);
  }
};

module.exports = userController;
