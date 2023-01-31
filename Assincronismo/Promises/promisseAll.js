// Executando Promessas em Paralelo com Promisse All
// Aqui usaremos essa função tendo como parâmetro um array de promessas

import axios from "axios";

Promise.all([
  axios.get('https://api.github.com/users/maykbrito'),
  axios.get('https://api.github.com/users/aykbrito/repos') // forcei um erro
])
.then(responses => {
  console.log(responses[0].data.login) // peguei um dado específico
  console.log(responses[1].data.length) // peguei um dado específico
})
.catch(err => console.log(err.message)) // peguei o erro de todos eles

// Cada posição do then corresponde a uma promessa
// O catch consegue pegar todos os erros