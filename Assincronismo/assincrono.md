# JavaScript Assícriono

- O que é síncrono vs assíncrono no JavaScript?
- Qual é o fluxo natural de execução do JavaScript?
- O que é uma `callback function?`
- A função `setTimeout()`

Dentre outros assuntos como Promises, Async / Await...

## Síncrono vs Assíncrono

- `Sistema Síncrono`
> Um sistema síncrono (synchronous) uma tarefa é concluída após a outra.

No exemplo apresentado na aula, uma imagem só carrega depois que a anterior termina de carregar. Ou seja, no sistema síncrono a tarefa anterior precisa ser concluída, para então iniciar a próxima.

Por padrão, o JavaScript é um sistema síncrono.

- `Sistema Assíncrono`
> Num sistema assíncrono (asynchronous) as tarefas são executadas de maneira independente uma da outra.

No exemplo apresentado na aula, as imagens são carregadas de maneira independente, não é necessário esperar a primeira imagem carregar para iniciar o carregamento da próxima.

O JavaScript poderá usar o assincronismo ao seu favor.

## CallBack

Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que funções aceitam qualquer tipo de dado como argumento, então no JavaScript é possível passar qualquer tipo de dado em uma função.

```js 

function imprimirDado(dado) {
	console.log(dado)
}

imprimirDado(1) // number
imprimirDado('texto')  // string
imprimirDado(true) // boolean
imprimirDado({ nome: 'João' }) // object
imprimirDado([1, 2, 3]) // array

function imprimirDado(dado) {
	console.log('outras tarefas')
	console.log(dado()) // chamei uma função dentro de outra
}

imprimirDado(function () {
	return 'Olá Mundo'
})
```

Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.

## SetTimeout

setTimeout() é uma função que recebe como argumento uma outra função e um tempo para ser executada.

> setTimeout(function, delay)

```js

// Exemplo01
setTimeout(function () {
	console.log('depois de 1s')
}, 1000)

// Exemplo 02
const timeOut = 3000
const finished = () => console.log('done!')
setTimeout(finished,timeOut) // A função será chamada de volta após 3s
console.log('Mostrar')

```
A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo. No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s.

## Conectando API com HTTPS e CallBack

Nesta aula vamos verificar se estamos entendendo como que funciona o callback e o assincronismo no JavaScript.

Para isso usamos conceitos de métodos HTTPS, e o próprio recurso do nodejs - require - para buscar esse método nativo do JS, o HTTPs e a partir dele poder acessar suas funções.

```js
const https = require('http')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2' // nossa requisição

https.get(API, res => {
	console.log(res.statusCode)
})

console.log('conectando API')
```

## Promise Intro

- O que é uma promessa no JavaScript?
- Como criar uma promessa?
- Como aguardar uma promessa ser finalizada?
- Quais os quatro estágios do ciclo de vida de uma Promise?
- O que são os métodos then, catch, finally da promessa?
- o que é a fetch API do navegador e como utilizar?
- O que é a biblioteca Axios e como utilizar?

Vamos aprender a executar mais de uma Promise ao mesmo tempo com o método .all()
Vamos usar a plataforma https://codesandbox.io/ para exemplificar nossos códigos no browser.
E o NodeJS para testar os códigos na máquina local.

## O que é uma Promise ?

> É um objeto JavaScript com a promessa de que algo será realizado.

- É usado para operações assíncronas
- Não bloqueia outras operações
- Essa promessa não significa que vai dar certo ou que vai dar errado
- Sintaxe: `new Promise(resolve, reject)`

- **Exemplo do Uber**
	- Quando você chama um uber pelo app
	- O app sempre vai retornar a promessa de uma corrida, ou seja, o app sempre vai prometer te dar uma corrida
	- Enquanto aguardamos a chegada do uber, estamos com a promessa pendente [pending]
	- Quando o motorista aceita a corrida estamos ok [fulfilled]
	- Caso, o motorista rejeite a corrida [rejected]
	- Querendo ou não nós usamos o app [settled]

- **Exemplo:**
	- Carregar um arquivo
	- Leitura de dados de uma API

Uma promessa poderá ser:

- `Pending:` Estado inicial, assim que o objeto da promessa é iniciado
- `Fulfilled:` A promessa foi concluída com sucesso
- `Rejected:` A promessa foi rejeitada, houve um erro
- `Settled:` Seja com sucesso ou erro, ela foi finalmente concluída

## Promise no Código

> Promise é a promessa de que algo irá acontecer. Poderá dar certo ou errado, mas irá acontecer.

- É obrigatório passar uma função como parâmetro.
- Como é um objeto a sua sintaxe é: `new Promise(certo,error)`

⚠ Obs: Se eu retorno "certo", então quer dizer que tudo foi ok. Mas caso contrário, então deu algum erro.

- **Solução do "Certo"**

Para indicar que a promessa foi aceita usamos o método `.then()`, a callback especificada para capturar esse acerto.

```js
console.log('pedir uber')

const promessa = new Promise((resolve,reject) => {
    return resolve('carro chegou')
}) // No momento de sua criação ela está pending

console.log('aguardando...')

promessa.then(result => console.log(result)) // Então (then), quando a promessa tiver um resultado seja + ou -, ela mandará uma resposta.
```

- **Solução do "Error"**

Para indicar que a promessa foi negada usamos o método `.catch()`, a callback especificada para capturar esse error.

```js
console.log('pedir uber')

const promessaError = new Promise((resolve,reject) => {
    return reject('pedido negado')
})

console.log('aguardando...')

promessaError.catch(result => console.log(result)) // Como é para capturar o erro, então usamos o "catch".
```

- **Finalização da Promise**

Dando certo ou não, um pedido (promessa) foi feito (iniciado), então ele precisa ser finalizado (chegar aos finalmentes). Assim, usamos o `finally()` para esse aspecto.

```js
promessa.finally(() => console.log('finalizada')) // Dando certo ou não o pedido foi feito.
```

## Promises com Fetch

Fecth é uma função que vai receber como parâmetro a URL da qual ele irá manipular, e quando digo "manipular" envolve mais do que apenas a busca das informações. 

O sentido de "busca" do fetch é que ele vai atrás dessa URL.

```js

fetch('https://api.github.com/users/maykbrito')
.then(response => response.json()) // vamos retornar apenas ele convertido em json
.then(data => fetch(data.repos_url)) // como vamos buscar algo dentro do que já foi buscado criamos outra promessa fetch
.then(res => res.json()
.then(d => console.log(d)))
.catch(err => console.log(err)) // Esse caminho do erro pode envolver qualquer etapa.

console.log(fetch('https://api.github.com/users/maykbrito'))
// Ao exibirmos isso mostrará que a promise está pendente

```

## AXIOS

> É uma biblioteca http client baseada em promessas para que possamos usar tanto no brownser quanto no node.js. 

- Por padrão do browser já temos o fetch, mas no node é preciso instalar.
- Como é uma biblioteca http, aqui já podemos acessar os métodos HTTPS. Seria uma alternativa para o "require".
- Link: https://axios-http.com/

```js
import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    console.log(res.data);
});
```

## Promises com Axios

Dessa forma, para cada nossa "requisição" ou "busca" que quisermos fazer teríamos que criar outra promessa axios, colocar um then, um catch e o código ficaria difícil de ler.

```js
import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    const user = res.data
    axios.get(user.repos_url) // vamos trabalhar com a nossa resposta
    .then((repos) => console.log(repos.data))
    .cacth(error => console.log(error))
  })
  .catch(error => console.log(error));
```

Dessa forma, fica mais simplificado.

```js
axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    const user = res.data
    return axios.get(user.repos_url) // vamos trabalhar com a nossa resposta
  })
  .then(repos => console.log(repos.data))  // por encadeamento o "then" se refere a linha de código anterior
  .catch(error => console.log(error))

```

E se caso quisermos colocar tudo em uma arrow function é só fazer isso. Deixando ainda bem mais simplificado.

```js

import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => axios.get(res.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))

```

## Executando Promessas em Paralelo com Promise all

Aqui vamos estar trabalhando com promessas em concorrência, ou seja, ao mesmo tempo que uma promessa esteja sendo executada outra também estará ocorrendo. Tendo um agrupamento das duas acontecendo ao mesmo tempo e depois retornando a resposta. 

Para isso usaremos `Promise.All()`. Ele envolve um array de promessas.

Com isso, todos os then e catch que vierem também serão um array, no qual cada posição corresponderá a uma promessa criada.

```js
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
```

## Async/Await

- Maneira de escrever promises
- Syntactic Sugar

Ou seja, é uma forma mais elegante de escrever promessas.

- Primeiro, vamos criar uma função 'async', porque dentro dela teremos um await (recurso usado para indicar a "espera" de uma promessa).

- **Sem usar o Async/Await**

```js
const promessa = new Promise(function(resolve,reject) {
    return resolve('Ok!') 
})

promessa
	.then(result => console.log(result)) // Então (then), quando a promessa tiver um resultado seja + ou -, ela mandará uma resposta.
	.catch(erro => console.log(erro)) // Como é para capturar o erro, então usamos o "catch".
	.finally(() => console.log('finalizada')) // Dando certo ou não o pedido foi feito.
```

- **Usando Async/Await**

- Essa primeira parte substitui o "then".

```js

const promessa = new Promise(function(resolve,reject) {
        return resolve('Ok!') 
})

async function start(){
  const result = await promessa  // espera de uma promessa
  console.log(result)
}

start()
```

- Para substituir o catch e finally usaremos a mesma sintaxa de tratamento de erros (try..catch), justamente com o finally.

```js
const promessa = new Promise(function (resolve, reject) {
  return resolve("Ok!");
});

async function start() {
  try {
    const result = await promessa; // vamos pegar o resultado da espera de uma promessa
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("rodar sempre");
  }
}

start();
```

## Async/Await com Fetch

- Podemos manipular a sintaxe Async/Await, esperando receber uma promessa, por meio da busca por fetch.
- O próprio uso do fetch já indica a criação de uma promessa.

```js

async function start() {
    const url = "https://api.github.com/users/maykbrito"
    const user = await fetch(url).then(r => r.json()); 
    const repos = await fetch(user.repos_url).then(r => r.json());
    console.log(repos);
}
  
start().catch((e) => console.log(e));

```

## Async/Await com Axios

- Podemos manipular a sintaxe Async/Await, esperando receber uma promessa, por meio da busca por axios.

```js

import axios from "axios";

async function fetchRepos(){
  const user = await axios.get("https://api.github.com/users/maykbrito")
  const repos = await axios.get(user.data.repos_url)
  console.log(repos.data)
}

fetchRepos().catch((e) => console.log(e))

```