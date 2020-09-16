const { Schema } = require("mongoose");

const mongoose = requere('mongoose');
const userSchema = require('./userSchema');
const bookSchema = require('./bookSchema');

var rentBook = new mongoose.Schema({
    dataLocacao: {
        type: Date,
        required : [true, "Obrigatório"]
    },
    dataDevolucao:{
        type: Date,
        required: [true, "Obrigatório"]
    },
    usuario:[userSchema],
    livro:[bookSchema]
});

module.exports = rentBook;
mongoose.model('alugarLivro', rentBook);
