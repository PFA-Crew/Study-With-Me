/* eslint-disable camelcase */
const { Notes } = require('../models/userModel');
const { Users } = require('../models/userModel');

const notesController = {};

// Note creator middleware
notesController.createNote = async (req, res, next) => {
  try {
    // Destructure title, conttent and username from our request body
    const { title, content, username } = req.body;

    const User = await Users.findOne({ username });
    // get _id of user to use as reference on note
    const { _id: owner_id } = User;

    console.log(User);
    // eslint-disable-next-line camelcase
    const createdNote = await Notes.create({ owner_id, title, content });

    res.locals.note = createdNote;

    return next();
  } catch (err) {
    // Handle error
    return next({
      log: `Error in notesController.createNote${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

// get users notes
notesController.getUserNotes = async (req, res, next) => {
  try {
    const { username } = res.locals.user;
    // query all noteids and return array containing all matching note contents
    const { _id: owner_id } = await Users.findOne({ username });
    const userNotes = await Notes.find({ owner_id });

    res.locals.notes = userNotes;

    return next();
  } catch (err) {
    // Handle error
    return next({
      log: `Error in notesController.getUserNotes${err}`,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = notesController;
