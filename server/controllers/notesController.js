const Note = require('../models/noteModel');

const noteController = {};

// get users notes
noteController.getUserNotes = async (req, res, next) => {
  try {
    const { noteIDs } = req.body.noteIDs;
    //query all noteids and return array containing all matching note contents
    const userNotes = await Promise.all(noteIDs.map(async (id) => {
      const noteContent = await Note.find({ noteID: id });
      return {noteId: id , content: noteContent}
    }));
  
    res.locals.notes = userNotes;

    return next();
  } catch (err) {
    // Handle error
    return next(err);
  }
};

module.exports = noteController;
