const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

const { Schema } = mongoose;

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
});

const Users = mongoose.model('user', userSchema);

const noteSchema = new Schema({
  content: { type: String },
});

const Notes = mongoose.model('note', noteSchema);

module.exports = { Users, Notes };
