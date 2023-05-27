const { Notes } = require('../models/userModel');
const { Users } = require('../models/userModel');

const notesController = {};

notesController.createNote = async (req, res, next) => {
  try {
    const { title, content, username } = req.body;

    const createdNote = await Notes.create({ title, content });
    const { _id } = createdNote;
    const { notes } = await Users.findOne({ username });
    const newNotes = [_id, ...notes];

    //update relevant user
    await Users.findOneAndUpdate({ username }, { notes: newNotes });
    res.locals.note = createdNote;

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
