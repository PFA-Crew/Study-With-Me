const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { MONGO_URI } = require('../config');

const { Schema } = mongoose;

const SALT_WORK_FACTOR = 15;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Study_With_Me',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notes: [{ title: String, id: { type: Schema.Types.ObjectId, ref: 'note' } }],
  duckcolor: String,
});

userSchema.pre('save', async function (next) {
  const { password } = this;

  const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);

  this.password = hashedPassword;

  return next();
});

const Users = mongoose.model('user', userSchema);

const noteSchema = new Schema({
  content: String,
});

const Notes = mongoose.model('note', noteSchema);

module.exports = { Users, Notes };
