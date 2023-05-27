const cookieController = {};
cookieController.setSSIDCookie = (req, res, next) => {
    // write code here
    res.cookie('ssid', res.locals.userID, { httpOnly: true });
    next();
  };
  
  module.exports = cookieController;
  