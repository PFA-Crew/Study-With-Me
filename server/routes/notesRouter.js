const express = require('express');

const router = express.Router();
const notesController = require('../controllers/notesController');

// Create a new note
router.post('/', notesController.createNote, notesController.getUserNotes, (req, res) => {
  res.status(200).json(res.locals);
});

// Get all notes from a user
router.get('/', notesController.getNotesByUsername, (req, res) => {
  res.json(res.locals.notes);
});

router.post('/display', notesController.getNote, (req, res) => {
  res.status(200).json(res.locals.note);
});

router.patch('/update', notesController.updateNote, (req, res) => {
  res.status(200).json(res.locals.update);
});

router.delete('/delete', notesController.deleteNote, (req, res) => {
  res.status(200).json(res.locals.deletedNote);
});

module.exports = router;
