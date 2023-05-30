const express = require('express');

const router = express.Router();
const notesController = require('../controllers/notesController');

// Route to create and add a new note to our user

router.post('/create', notesController.createNote, (req, res) => {
  res.status(200).json(res.locals.note);
});

router.patch('/update', notesController.updateNote, (req, res) => {
  res.status(200).json(res.locals.update);
});

module.exports = router;
