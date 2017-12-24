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
    trim: true,
  },
  tags: {
    type: String,
    trim: true
  },
  favorite: Boolean,
  color: String
});

keepSchema.index({title: 'text', text: 'text'});

module.exports = mongoose.model('Keep', keepSchema);
