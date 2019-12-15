/* O usuário deve ser capaz de:

ver todos seus livros de acordo com seu ID,
deletar livros,
adicionar livros,
alterar descrição dos livros

*/

const { connect } = require('../models/database')
const { booksModel } = require('../models/booksSchema')

connect()