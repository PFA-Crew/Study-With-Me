const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const cookieId = res.locals.userId;
  res.cookie('ssid', cookieId, { httpOnly: true });
  next();
};

module.exports = cookieController;
