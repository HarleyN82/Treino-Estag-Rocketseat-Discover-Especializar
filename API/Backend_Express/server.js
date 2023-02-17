// Trabalhando com API + Express
// Criando o nosso servidor com Express

const express = require('express'); // chamando o módulo
const app = express() // contração para aplicattion - inicializando o express
app.listen(3000, () => console.log('Servidor iniciado na porta 3000')); // ouvindo a porta do navegador = server

// Method Get
app.route("/about").get((req,res) => res.send("This is my about page"))

// Middleware
app.use(express.json()) 

// Method Post
app.route('/').post((req,res) => res.send(req.body)) 
// console.log(req.body) // veremos a requisição no console apenas

// Method Put
let author = "Samara"

app.route('/').get((req,res) => res.send(author)) // Mostrar o valor da variável
app.route('/').put((req,res) => {
    author = req.body.author  // Vamos alterar o "Samara" para a informação que está dentro do body
    res.send(author) // irá mostrar a alteração no retorno
})

// Method Delete
// :identificador - Informando o dado específico que queremos deletar

app.route('/:identificador').delete((req,res) => { 
    res.send(req.params.identificador)
})