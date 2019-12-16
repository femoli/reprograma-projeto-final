/* O usuário deve ser capaz de:

ver todos seus livros de acordo com seu ID,
deletar livros,
alterar descrição dos livros,
encontrar livros para serem doados,
encontrar livros por autor,

*/

const { connect } = require('../models/database')
const { booksModel } = require('../models/booksSchema')

connect()