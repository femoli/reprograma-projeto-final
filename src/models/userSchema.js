const mongoose = require('mongoose');
const { booksSchema } = require('./booksSchema')
const Schema = mongoose.Schema;
const userSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  picture: { type: String },
  books: [booksSchema],
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;