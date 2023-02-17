// Trabalhando com API + Express 

const express = require('express'); // chamando o módulo
const app = express() // contração para aplicattion - inicializando o express

app.listen('3000') // ouvindo a porta do navegador = server

// Method Get
// Route - função para compor as rotas que o site vai fazer

// app.route("/").get((req,res) => res.send("Hello"))
app.route("/sobre").get((req,res) => res.send("Hello sobre"))

// Middleware
// Ponte entre as requisições, ou seja, precisamos converter para JSON
// Quando recebemos algo na API precisamos informar que é algo Json

app.use(express.json()) // usamos o express cru para fazer essa conversão

// Method Post
// Receber informações de fora para dentro da API
// Como o navegador só pega o method get, então precisamos usar o insominia para fazer as demais requisições
// Insominia vai bater na rotar, identificar que é post, mas antes de bater ele vai converter para json.

app.route('/').post((req,res) => res.send(req.body)) // Pega o corpo da requisição e enviar para o insominia
// console.log(req.body) // veremos a requisição no console apenas

// Method Put
// Se colocarmos apenas o "res.send(author)" ele vai mostrar o valor dentro da variável que criamos

let author = "Samara"

app.route("/").get((req,res) => res.send(author)) // Mostrar o valor da variável, mas é preciso cancelar o outro get.

app.route('/').put((req,res) => {
    author = req.body.author  // (recebemos apenas o contéudo) // Vamos alterar o "Samara" para a informação que está dentro do body
    res.send(author) // irá mostrar a alteração no retorno
})

// Method Delete
// :identificador - Informando o dado específico que queremos deletar

app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador) // mostrar no insominia o identificador que foi deletado
})