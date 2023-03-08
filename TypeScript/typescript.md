# TypeScript

> O TypeScript foi criado pela Microsoft para trazer um superset de tipagens para o JavaScript.

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript. No caso, o type fornece uma ambiente de tipagem para o JS, isso é importante, porque em sua essência o JS não é uma linguagem ofrtemente tipada que obriga o usuário a informar se o dado que está entrando é um "string" ou "number".

Então, quando acontece algum erro envolvendo tipagem, por exemplo, armazenar uma string em uma variável que quer um number, a gente só sabe na hora da execução. Mas, com o type podemos descobrir no momento do desenvolvimento da aplicação.

**Detalhe:** Não precisamos tipar tudo, apenas no que é necessário para a aplicação.

## Porquê utilizar TypeScript?

A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

```js

function sum(a, b){
  return a + b;
}

console.log(sum('1', '2'));
// Ao executar esse trecho de código o resultado seria 12.

```

Esse tipo de erro é licencioso, então se estivessemos que lidar com uma grande quantidade de dados, todo um sistema de compras, por exemplo, seria prejudicado, porque esse erro não foi reportado e, portanto, corrigido. Então, Se estivéssemos utilizando o TypeScript não precisaríamos executar para identificar o erro.

**Detalhe:** Instale a extensão de JS e TypeScript - Quokka.js - Ela já executa, dentro o VSCode, o Js.

- **Resultado**

```js

const message = "Hello world";

message();
message.name = "Samara"
console.log(message)

```

```js

function  message(){
  console.log("Hello World!");
}

// Função de strings
// message().toLowerCase();

const userName = "SAMARA"
console.log(userName.toLowerCase());

```

## TypeScript Playground

Nesta aula nós utilizaremos o `TypeScript Playground`, essa ferramenta não necessita de nenhuma instalação e pode ser executada diretamente pelo seu navegador.

## Verificação tipo estático
> Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática:

```js
// Nos ajuda a encontrar bugs, porque ele é um verifiador do tipo estático, dizendo a forma, comportmaneto e afins que os valores deveriam ser.

const userName = "Samara";
// userName();

const user = {
    name: 'Samara Silvia',
    email: 'samarasilvia3110@gmail.com'
}

// console.log(user.location);

function sum(a:number,b:number){
    return a + b 
}

sum(10,3)
// sum('10',3)
// sum.toLowerCase()

const text = 'Samara';
text.toLowerCase();
```

Ao tentar como uma função o TypeScript nos avisará que o que estamos querendo executar é uma variável do tipo String.

https://storage.googleapis.com/golden-wind/discover/especializar/typescript/verificacao-tipo-estatico.png

## Compilação
O TypeScript é sempre compilado para JavaScript, mas normalmente não estamos vendo isso. Observe os exemplos:

- **Código em TypeScript:**

```js
function showTicket(user:string | null,ticket:number){
    console.log(`Olá ${user ?? 'Usuário Padrão' }. 
    Seu número de bilhete é ${ticket}.`)
}

showTicket('Samara Silvia',123)
// Ele remove a tipagem no final, porque só é útil no desenvolvimento

```

- **Resultado da conversão para JavaScript:**

```js
"use strict";
function showTicket(user, ticket) {
    console.log(`Olá ${user !== null && user !== void 0 ? user : 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`);
}
showTicket('João Inácio', 123);
```

## Tipagem explícita
Na tipagem explícita nós especificamos o qual será o tipo de cada variável.

```js
user: string, ticket: number;
```

O TypeScript nos ajuda a identificar cada tipo de variável ao invocá-las.

https://storage.googleapis.com/golden-wind/discover/especializar/typescript/tipagem-explicita.png