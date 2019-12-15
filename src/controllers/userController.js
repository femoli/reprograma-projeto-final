/* O usuário deve ser capaz de:

criar uma conta,
deletar a conta,
fazer login,
ler suas informações,
encontrar todos que precisam de um livro (doações)

*/

const { connect } = require('../models/database')
const userModel = require('../models/userSchema')
//const { booksModel } = require('../models/booksSchema')
//const bcrypt = require('bcryptjs')

connect()

const getAll = (req, res) => {
    userModel.find((error, users) => {
        if (error) {
            return res.status(500).send(error)
        }

        return res.status(200).send(users)
    })
}


module.exports = {
getAll
}