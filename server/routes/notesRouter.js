const express = require('express');

const router = express.Router();
const notesController = require('../controllers/notesController');

// Route to create and add a new note to our user
router.post('/create', notesController.createNote, (req, res) => {
  res.status(200).json(res.locals.note);
});

module.exports = router;