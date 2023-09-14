const express  = require('express');
const {mostrarLivro, addLivro, minhaLista, removerLivro}  = require('./controladores/livros');
const rotas = express();


rotas.get('/minhaLista',minhaLista);
rotas.get('/buscar/:nomeLivro',mostrarLivro);
rotas.post('/adicionar',addLivro);
rotas.delete('/remover',removerLivro);


module.exports = rotas;