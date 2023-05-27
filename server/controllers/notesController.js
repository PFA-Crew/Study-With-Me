const Note = require('../models/noteModel');

const noteController = {};

// get users notes
noteController.getUserNotes = async (req, res, next) => {
  try {
    const { noteIDs } = req.body.noteIDs;
    const userNotes = await Promise.all(noteIDs.map(async (id) => {
      await Note.find({ noteID: id });
    }));
  
    res.locals.notes = userNotes;
    // Invoke next middleware
    return next();
  } catch (error) {
    // Handle error
    return next(error);
  }
};

module.exports = noteController;
