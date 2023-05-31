const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// pulls mongoDB URI from file only saved on the local machine

const { Schema } = mongoose;

const SALT_WORK_FACTOR = 15;

// Schema for our users document
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // notes: [{ id: { type: Schema.Types.ObjectId, ref: 'note' } }],
  duckColor: { type: String, default: 'yellow' },
});

// When calling our user schema, do this first
userSchema.pre('save', async function (next) {
  // Destruction password from userScema
  const { password } = this;

  // Hash our password using bcrypt
  const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);

  // Assign our new hashed password in place of the user inputed password
  this.password = hashedPassword;

  // Continue to next step
  return next();
});

// Create our user model linking the userSchema and users document
const Users = mongoose.model('user', userSchema);


module.exports = Users;
