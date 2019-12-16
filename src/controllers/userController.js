/* O usuário deve ser capaz de:

criar uma conta, (ok)
deletar a conta, (ok)
fazer login,
encontrar todos usuários, (ok)
ler suas informações por id, (ok)
encontrar todos que precisam de um livro (doações), (ok)
adicionar livros, (ok)

*/

const { connect } = require('../models/database');
const userModel = require('../models/userSchema');
const { booksModel } = require('../models/booksSchema');


connect();

const getAll = (req, res) => {
    userModel.find((error, users) => {
        if (error) {
            return res.status(500).send(error);
        }

        return res.status(200).send(users);
    })
}

const add = (req, res) => {
    const newUser = new userModel(req.body);

    newUser.save((error) => {
        if (error) {
            return res.status(500).send(error);
        }

        return res.status(201).send(newUser);
    })

}

const addBook = async (req, res) => {
    const userId = req.params.userId
    const book = req.body
    const newBook = new booksModel(book)
    const user = await userModel.findById(userId)
    user.books.push(newBook)
    user.save((error) => {
        if (error) {
            return res.status(500).send(error)
        }

        return res.status(201).send(user)
    })
}

const getById = (req, res) => {
    const id = req.params.id

    return userModel.findById(id, (error, user) => {
        if (error) {
            return res.status(500).send(error);
        }

        if (user) {
            return res.status(200).send(user);
        }

        return res.status(404).send('Usuário não encontrado.');
    })
}

const remove = (req, res) => {

    const id = req.params.id;

    userModel.findByIdAndDelete(id, (error, user) => {
        if (error) {
            return res.status(500).send(error);
        }

        if (user) {
            return res.status(200).send(`Usuário deletado com sucesso. ${user}`);
        }

        return res.status(404).send('Usuário não encontrado.');
    })

}

const getDonation = (req, res) => {

    userModel.find({ need_donation: true }, (error, users) => {
        if (error) {
            return res.status(500).send(error);
        }

        return res.status(200).send(users);
    })
}

const updateBook = (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const book = req.body;

    userModel.findOneAndUpdate(

        { _id: userId, "books._id": bookId },
        {
            $set:
            {
                "books.$.name": book.name,
                "books.$.picture": book.picture,
                "books.$.description": book.description,
                "books.$.yearEdition": book.yearEdition
            }
        },
        { new: true, upsert: true },
        (error, user) => {
            if (error) {

                return res.status(500).send(error)
            }

            return res.status(200).send(user)
        }
    )
}

module.exports = {
    getAll,
    add,
    getById,
    remove,
    getDonation,
    addBook,
    updateBook
}