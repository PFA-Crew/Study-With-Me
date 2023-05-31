const Session = require('../models/sessionModel');

const sessionController = {};

// Check the database to verify the if the user currently has a session
sessionController.isLoggedIn = async (req, res, next) => {
  const cookieId = req.cookies.ssid;
  try {
    const user = await Session.findOne({ cookieId });
    if (user) return res.json({ message: `${user.username} is logged in!` });
    return res.sendStatus(400);
  } catch (err) {
    next(err);
  }
};

// Start a new session or refresh and existing session
sessionController.startSession = async (req, res, next) => {
  const cookieId = res.locals.userId;
  try {
    const session = await Session.findOne({ cookieId });
    if (session) {
      // refresh the current session
      console.log('refreshing the current session');
      session.createdAt = Date.now();
    } else {
      // create a new session
      console.log('creating a new session');
      await Session.create({ cookieId });
    }
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = sessionController;
