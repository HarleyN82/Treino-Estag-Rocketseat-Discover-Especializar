// Async/Await com Fetch

// Maneira comum 

fetch('https://api.github.com/users/maykbrito')
.then(response => response.json()) // vamos retornar apenas ele
.then(data => fetch(data.repos_url))
.then(res => res.json()
.then(d => console.log(d)))
.catch(err => console.log(err)) // Esse caminho do erro pode envolver qualquer etapa.

console.log(fetch('https://api.github.com/users/maykbrito'))
// Ao exibirmos isso mostrará que a promise está pendente


// 1. Podemos usar dessa outra forma
// Criamos e transformando os dados para json...

async function start() {
    try {
      const result = await fetch('https://api.github.com/users/maykbrito'); // vamos pegar o resultado da espera de uma promessa
      const user = await result.json() // Espero a transformação da resposta em json
      const reposResponse = await fetch(user.repos_url)
      const repos = await reposResponse.json()
      console.log(repos)
    } catch (e) {
      console.log(e);
    } finally {
      console.log("rodar sempre");
    }
  }
  
start();

// 2. Podemos usar essa sintaxe dessa forma
// Por ser uma função assíncrona ela vai me devolver uma promessa, então podemos usar tanto o then, quando o catch ou finally.

async function start() {
    const result = await fetch("https://api.github.com/users/maykbrito"); // vamos pegar o resultado da espera de uma promessa
    const user = await result.json(); // Espero a transformação da resposta em json
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(repos);
}
  
start().catch((e) => console.log(e));

/* 3. Uma terceira forma que podemos fazer com um encadeamento, eliminando linhas adicionais

Aqui temos:

- Uma URL
- Um usuário esperando buscar pela url 
- Os repositórios esperando a busca dos repositórios pela busca dos usuários

*/

async function start() {
    const url = "https://api.github.com/users/maykbrito"
    const user = await fetch(url).then(r => r.json()); 
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos);
}
  
start().catch((e) => console.log(e));