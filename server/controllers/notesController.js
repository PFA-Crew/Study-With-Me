const { Notes } = require('../models/userModel');
const { Users } = require('../models/userModel');

const notesController = {};

// Note creator middleware
notesController.createNote = async (req, res, next) => {
  try {
    // Destructure title, conttent and username from our request body
    const { title, content, username } = req.body;

    // Add a new note object to our notes document
    const createdNote = await Notes.create({ title, content });
    // Deconstruct the id from the new note
    const { _id } = createdNote;
    // Deconstruct the notes array from the users document, finding the user that matches the username
    const { notes } = await Users.findOne({ username });
    // Create a new array passing in the id of our new note and spreading the array of note ids to the new array
    const newNotes = [_id, ...notes];

    // Update relevant user notes array with our new array of notes ids
    await Users.findOneAndUpdate({ username }, { notes: newNotes });
    res.locals.note = createdNote;

    // Move to our next middleware
    return next();
  } catch (err) {
    //Handle error
    return next({
      log: 'Error in notesController.createNote' + err,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

// get users notes
notesController.getUserNotes = async (req, res, next) => {
  try {
    const { Obj } = res.locals.user.notes;
    //query all noteids and return array containing all matching note contents
    const userNotes = await Promise.all(
      noteIDs.map(async (_id) => {
        const noteContent = await Note.find({ noteID: id });
        return { noteId: _id, content: noteContent };
      })
    );

    res.locals.notes = userNotes;

    return next();
  } catch (err) {
    // Handle error
    return next({
      log: 'Error in notesController.getUserNotes' + err,
      message: {
        err: 'An error occured, check server logs',
      },
    });
  }
};

module.exports = notesController;
