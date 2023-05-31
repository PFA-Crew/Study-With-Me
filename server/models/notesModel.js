const mongoose = require('mongoose');
// Schema for our notes document

const { Schema } = mongoose; 

const noteSchema = new Schema({
  owner_id: { type: Schema.Types.ObjectId, ref: 'user' },
  title: String,
  content: String,
});

// Create our notes model linking the notesSchema and notes document
const Notes = mongoose.model('note', noteSchema);

module.exports = Notes