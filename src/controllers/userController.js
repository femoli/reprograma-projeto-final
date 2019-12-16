/* O usuário deve ser capaz de:

criar uma conta, (ok)
deletar a conta, (ok)
fazer login,
encontrar todos usuários, (ok)
ler suas informações por id, (ok)
encontrar todos que precisam de um livro (doações)

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

    const id = req.params.id

    userModel.findByIdAndDelete(id, (error, user) => {
        if (error) {
            return res.status(500).send(error)
        }

        if (user) {
            return res.status(200).send(`Usuário deletado com sucesso. ${user}`)
        }

        return res.status(404).send('Usuário não encontrado.')
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

module.exports = {
    getAll,
    add,
    getById,
    remove,
    getDonation
}