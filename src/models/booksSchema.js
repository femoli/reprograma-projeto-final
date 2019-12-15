const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const booksSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true },
    yearEdition: { type: Number },
    description: { type: String }
})

const booksModel = mongoose.model('books', booksSchema);

module.exports = { booksModel, booksSchema };
