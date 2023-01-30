// Conectando API com HTTPS e CallBack
// + nodejs
// A API está sdofrendo um Fetch (Buscar algo)

const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
	console.log(res.statusCode)
})

console.log('conectando API')

/* Explicação
Enquanto que a resposta da requisição não vem se pula para o próximo bloco de construção */