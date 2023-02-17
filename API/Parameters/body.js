// Body Params

const express = require('express'); // chamando o módulo
const app = express() // contração para aplicattion - inicializando o express
app.listen('3000')

app.route('/').get((req,res) => {
    res.send('olá') //console.log(req.body) // body está dentro da requisição
})

app.use(express.json())

app.route('/').post((req,res) => {
    const {nome,cidade} = req.body // pegamos valores específicos
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`) // body está dentro da requisição
})