const Session = require('../models/sessionModel');

const sessionController = {};


sessionController.isLoggedIn = async (req, res, next) => {
  if (req.cookies.ssid) {
    if (await Session.findOne({ cookieId: req.cookies.ssid })) {
      return next();
    }
  }
  res.redirect('/auth/create');
};

sessionController.startSession = async (req, res, next) => {
  try {
    await Session.create({ cookieId: res.locals.userID });
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = sessionController;