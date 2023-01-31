// Fecth da API + Then
// Usando a extensão json para podermos conseguir vê os dados

fetch('https://api.github.com/users/maykbrito')
.then(response => {
   response.json() // criou-se uma nova promessa permitindo acessar os dados
   .then(data => console.log(data)) // Assim, eu consigo vê os dados
})

// Criando uma cadeia de then até chegar nos dados propriarmente ditos.

fetch('https://api.github.com/users/maykbrito')
.then(response => {
   response.json() // criou-se uma nova promessa permitindo acessar os dados
  .then(data => {
    fetch(data.repos_url)
      .then(res => res.json()
        .then(d => console.log(d)))
  })
})

// Podemos simplificar o código através do poder de encadeamento de uma chamada após outra chamada..., onde há  uma interdependência entre as calls.

fetch('https://api.github.com/users/maykbrito')
.then(response => response.json()) // vamos retornar apenas ele
.then(data => fetch(data.repos_url))
.then(res => res.json()
.then(d => console.log(d)))
.catch(err => console.log(err)) // Esse caminho do erro pode envolver qualquer etapa.

console.log(fetch('https://api.github.com/users/maykbrito'))
// Ao exibirmos isso mostrará que a promise está pendente