const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const cookieId = res.locals.userId;
  console.log('cookieId in cookieController', { cookieId });
  res.cookie('ssid', cookieId, { httpOnly: true }); //{ cookieId: new ObjectId("64768e9f4514bb3669ecaebc") }
  next();
};

module.exports = cookieController;
