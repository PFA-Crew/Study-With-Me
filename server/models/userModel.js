const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  data: { type: Array },
});

module.exports = mongoose.model('User', userSchema);
