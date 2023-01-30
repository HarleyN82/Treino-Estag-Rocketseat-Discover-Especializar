# JavaScript Assícriono

O que é síncrono vs assíncrono no JavaScript?
Qual é o fluxo natural de execução do JavaScript?
O que é uma `callback function?`
A função `setTimeout()`

Dentre outros assuntos como Promises, Async / Await...

## Síncrono vs Assíncrono

- `Sistema Síncrono`
Um sistema síncrono (synchronous) é uma tarefa que é concluída após a outra.

No exemplo apresentado na aula, uma imagem só carrega depois que a anterior termina de carregar. Ou seja, no sistema síncrono a tarefa anterior precisa ser concluída, para então iniciar a próxima.

Por padrão, o JavaScript é um sistema síncrono.

- `Sistema Assíncrono`

Num sistema assíncrono (asynchronous) as tarefas são executadas de maneira independente uma da outra.

No exemplo apresentado na aula, as imagens são carregadas de maneira independente, não é necessário esperar a primeira imagem carregar para iniciar o carregamento da próxima.

O JavaScript poderá usar o assincronismo ao seu favor.


## CallBack

Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que funções aceitam qualquer tipo de dado como argumento, então no JavaScript é possível passar qualquer tipo de dado em uma função.

```js 

function imprimirDado(dado) {
	console.log(dado)
}

imprimirDado(1) 
imprimirDado('texto') 
imprimirDado(true)
imprimirDado({ nome: 'João' })
imprimirDado([1, 2, 3])

function imprimirDado(dado) {
	console.log('outras tarefas')
	console.log(dado())
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

```js
const https = require('http')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

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

