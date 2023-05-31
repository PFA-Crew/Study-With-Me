const express = require('express');

const router = express.Router();
const notesController = require('../controllers/notesController');
const userController = require('../controllers/userController')

// Route to create and add a new note to our user

router.post('/create', notesController.createNote, notesController.getUserNotes, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/display', notesController.getNote, (req, res) => {
  res.status(200).json(res.locals.note);
})

router.patch('/update', notesController.updateNote, (req, res) => {
  res.status(200).json(res.locals.update);
});

router.delete('/delete', notesController.deleteNote, (req, res) => {
  res.status(200).json(res.locals.deletedNote);
});

module.exports = router;


