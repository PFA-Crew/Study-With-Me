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

/**
 * Handles user authentication by checking if password sent in login request matches the password in the DB
 * @name matchPassword
 * @param {String} enteredPassword
 * @this User.findOne({ username })
 */
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

/**
 * Handles the salting and hashing of a password *before* saving it to the database
 * @name hashPassword
 * @this user
 * @param {String} this.password
 * @returns bcrypt.hash(this.password)
 */
userSchema.pre('save', async function (next) {
  // Destruction password from userScema
  const { password } = this;

  // prevent new hash of password being made if user updates some account data, but not password
  if (!this.isModified('password')) {
    next()
  }

  // Hash our password using bcrypt
  const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);

  // Assign our new hashed password in place of the user inputed password
  this.password = hashedPassword;

  // Continue to next step
  return next();
});

// Create our user model linking the userSchema and users document
const Users = mongoose.model('user', userSchema);

// Schema for our notes document
const noteSchema = new Schema({
  owner_id: { type: Schema.Types.ObjectId, ref: 'user' },
  title: String,
  content: String,
});

// Create our notes model linking the notesSchema and notes document
const Notes = mongoose.model('note', noteSchema);

module.exports = { Users, Notes };
