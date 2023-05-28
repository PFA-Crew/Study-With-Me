const express = require('express');
// const path = require('path');

const router = express.Router();
const userController = require('../controllers/userController');
// const cookieController = require('../controllers/cookieController');
// const sessionController = require('../controllers/sessionController');

// Route to handle creating a new user
router.post('/create', userController.createUser, (req, res) => {
  res.status(201).json(res.locals);
});

// Route to find and verify a user
router.post('/login', userController.verifyUser, (req, res) => {
  res.status(201).json(res.locals);
});

module.exports = router;
