const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.userID, { httpOnly: true });
  next();
};

module.exports = cookieController;
