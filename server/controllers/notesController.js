/* eslint-disable camelcase */
const Notes = require('../models/notesModel');
const Users = require('../models/userModel');

const notesController = {};

// Note creator middleware
notesController.createNote = async (req, res, next) => {
  try {
    // Destructure title, content and username from our request body
    const { title, content } = req.body;
    const { username } = res.locals;

    const User = await Users.findOne({ username });
    // get _id of user to use as reference on note
    const { _id: owner_id } = User;
    // eslint-disable-next-line camelcase
    const createdNote = await Notes.create({ owner_id, title, content });

    res.locals.note = createdNote;

    return next();
  } catch (err) {
    next(err);
  }
};

// Get all notes from a user
// The username must be in the request body
notesController.getNotesByUsername = async (req, res, next) => {
  try {
    const { username } = res.locals;
    const User = await Users.findOne({ username });

    if (!User) throw new Error(`User ${username} not found.`);

    const { _id: owner_id } = User;
    res.locals.notes = await Notes.find({ owner_id });

    return next();
  } catch (err) {
    next(err);
  }
};

// Get a single note from a user
notesController.getNote = async (req, res, next) => {
  try {
    const { title, username } = req.body;
    // query noteid and return the single note
    const { _id: owner_id } = await Users.findOne({ username });
    const note = await Notes.findOne({ owner_id, title });

    res.locals.note = note;

    return next();
  } catch (err) {
    next(err);
  }
};

// get users notes
notesController.getUserNotes = async (req, res, next) => {
  try {
    const { username } = req.body;
    // query all noteids and return array containing all matching note contents
    const { _id: owner_id } = await Users.findOne({ username });
    const userNotes = await Notes.find({ owner_id });

    res.locals.notes = userNotes;
    //
    return next();
  } catch (err) {
    next(err);
  }
};

notesController.updateNote = async (req, res, next) => {
  // there should be a check here to make sure the logged in user is the only one able to update their note
  // will have to wait until sessions are implemented
  try {
    const { note_id, content: newContent, title: newTitle } = req.body;

    const updatedNote = await Notes.findOneAndUpdate(
      { _id: note_id },
      { title: newTitle, content: newContent },
      { new: true },
    );

    res.locals.update = updatedNote;
    // Persist data to res.locals
    // Invoke next middleware
    return next();
  } catch (err) {
    next(err);
  }
};

notesController.deleteNote = async (req, res, next) => {
  try {
    const { note_id } = req.body;

    // Find and delete the note by its ID
    const deletedNote = await Notes.findOneAndDelete({ _id: note_id });

    if (!deletedNote) {
      return next({
        log: 'Note not found',
        message: { error: 'Note not found' },
      });
    }

    res.locals.deletedNote = deletedNote;
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = notesController;
