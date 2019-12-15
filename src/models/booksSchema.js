const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const booksSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    name: { type: String, required: true },
    picture: { type: String },
    yearEdition: { type: Number, required: true },
    description: { type: String, required: true },
    donation: { type: Boolean }
})

const booksModel = mongoose.model('books', booksSchema);

module.exports = { booksModel, booksSchema };
