const express = require('express');
// const path = require('path');

const router = express.Router();
const userController = require('../controllers/userController');
const notesController = require('../controllers/notesController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

// Route to handle creating a new user
router.post(
  '/create',
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(201).json(res.locals);
  },
);

// Route to find and verify a user
router.post(
  '/login',
  userController.verifyUser,
  notesController.getUserNotes,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(201).json(res.locals);
  },
);

module.exports = router;
