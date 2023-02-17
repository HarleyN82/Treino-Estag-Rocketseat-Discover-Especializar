// Route Params

const express = require('express');
const app = express()
app.listen('3000')

app.route('/').get((req,res) => res.send("Olá"))

// Ao invés de escrevermos olá, mas passar o parâmetro
app.route('/:variavel').get((req,res) => {
    res.send(req.params.variavel)
})

// Mas dessa vez só será chamada, exclusivamente, se após o barra tiver "identidade"
app.route('/identidade/:nome').get((req,res) => {
    res.send(req.params.nome)
})