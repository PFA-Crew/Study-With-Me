const express = require('express');
// const path = require('path');

const router = express.Router();
const userController = require('../controllers/userController');
// const cookieController = require('../controllers/cookieController');
// const sessionController = require('../controllers/sessionController');
// const client_id = require(path.resolve('keys.js'))

router.post('/create', userController.createUser, (req, res) => {
  res.sendStatus(201);
});

router.post('/login', userController.verifyUser, (req, res) => {
  // find data in db and return json layouts

  res.status(201).json(res.locals);
});

module.exports = router;
