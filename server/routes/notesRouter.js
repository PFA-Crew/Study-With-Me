const express = require('express');

const router = express.Router();
const notesController = require('../controllers/notesController');

//method for creating notes

router.post('/create', notesController.createNote, (req, res) => {
  res.status(200).json(res.locals.note);
});

module.exports = router;