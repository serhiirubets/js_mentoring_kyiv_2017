const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keepSchema = new Schema({
  title: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please supply a title'
  },
  text: {
    type: String,
    trim: true
  },
  tags: [String],
});

module.exports = mongoose.model('Keep', keepSchema);
