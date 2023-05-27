const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
  noteID: { type: String },
});

module.exports = mongoose.model('Note', noteSchema);
