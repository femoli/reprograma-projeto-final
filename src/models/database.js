const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/reprograma'

const connect = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao conectar no mongo'))

    connection.once('open', () => console.log('Conectado no Mongo!'))
}


module.exports = { connect }