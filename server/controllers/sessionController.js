const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    // get the username, and assign it to res.locals.username
    const foundSession = await Session.findOne({ cookieId: req.cookies.ssid });
    console.log('foundSession in isLoggedIn session controller', foundSession);
    if (!foundSession) throw new Error('Session expired or does not exist');
    else {
      res.locals.username = foundSession.username;
      return next();
    }
  } catch (error) {
    console.log(error);
    res.redirect('/'); // redirect to the login page
  }
};

sessionController.startSession = async (req, res, next) => {
  const cookieId = res.locals.userId;
  const username = res.locals.username;

  try {
    const foundSession = await Session.findOne({ cookieId });

    if (foundSession) {
      console.log('refreshing the current session...');
      foundSession.createdAt = Date.now();
    } else {
      console.log('creating a new session...');
      await Session.create({ cookieId, username });
    }
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = sessionController;
