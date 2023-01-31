// Dessa forma, para cada nossa "requisição" ou "busca" que quisermos fazer teríamos que criar outra promessa axios, colocar um then, um catch e o código ficaria difícil de ler.

import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    const user = res.data
    axios.get(user.repos_url) // vamos trabalhar com a nossa resposta
    .then((repos) => console.log(repos.data))
    .cacth(error => console.log(error))
  })
  .catch(error => console.log(error));


// Dessa forma, fica mais simplificado.

axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    const user = res.data
    return axios.get(user.repos_url) // vamos trabalhar com a nossa resposta
  })
  .then(repos => console.log(repos.data))  // por encadeamento o "then" se refere a linha de código anterior
  .catch(error => console.log(error))

// E se caso quisermos colocar tudo em uma arrow function é só fazer isso. Deixando ainda bem mais simplificado.

import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => axios.get(res.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))