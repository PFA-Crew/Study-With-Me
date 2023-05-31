const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const notesController = require('../controllers/notesController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

// Login a user
router.post(
  '/login',
  userController.verifyUser,
  // notesController.getUserNotes,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(201).json(res.locals);
  },
);

// Create a new user
router.post(
  '/create',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(201).json(res.locals);
  },
);

module.exports = router;
