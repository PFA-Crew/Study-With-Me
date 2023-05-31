const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 5000, default: Date.now },
  username: {type: String, required: true}
});

module.exports = mongoose.model('Session', sessionSchema);
