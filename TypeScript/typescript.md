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

// Exemplo 01

const message = "Hello world";

message();
message.name = "Samara"
console.log(message)

// Exemplo 02

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

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/verificacao-tipo-estatico.png">

## Verificação Tipo Estático
> Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática.

Diz que linguagens são do tipo estática quando a maioria de suas verificações ocorrm no tempo de compilação do código (o tipo é definido quando o código é escrito e verificado antes da execução), sendo seus tipos associados as variáveis, argumentos e resultado de funções. 

Nesse caso, entende-se por "estática" quando os tipos dos valores não mudam ao longo da execução do sistema. Então, se eu fizer uma função que precisa receber uma string como parâmetro, então ela vai sempre receber uma string. Assim, erros como `'1' + 1 = 11` não ocorreram.

**Exemplos de Linguagem:** Java, C++ e C#...

- **Vantagens**

  - A verificação de tipos estática permite detectar muitos erros de tipos numa fase inicial do ciclo de desenvolvimento dos programas. 
  - Estes verificadores apenas avaliam a informação de tipos que pode ser determinada em tempo de compilação, sendo no entanto capazes de verificar que as condições examinadas se mantêm para todas as execuções possíveis do programa.
  - A grande vantagem é que, desta forma, se elimina a necessidade de repetir estas verificações de tipos de cada vez que o programa é executado.

- **Tipificação Dinâmica**

Linguagens que usam tipagem dinâmica são opostas a estática. Assim, uma mesma variável pode conter valores de diferentes tipos, em diferentes momentos da execução dos programas. Isso pois, o tipo da variável é definido quando o código é executado e verificado durante a execução, por isso o "dinâmica".

Estas linguagens associam os tipos aos valores/parâmetros/resultado de funções que são usados em tempo de execução, sendo portanto necessária a existência de informação de tipo, nessa altura, associada a esses valores.

**Exemplos de Linguagens:** Python, Ruby e JavaScript...

- **Estática vs Dinâmica**

A tipificação estática pode ser vantajosa porque erros de tipo são identificados em tempo de compilação, tornando a depuração de código mais fácil. Já a tipificação dinâmica pode ser mais flexível, permitindo que variáveis sejam reatribuídas com tipos diferentes durante a execução, o que pode ser útil em certos cenários.

- **Exemplo em Código**

```js

// Verificadores do tipo estático nos ajudam a encontrar bugs, porque ele é um verificador do tipo estático, ou seja, nos instrui quanto a forma, comportamento e afins que os valores deveriam ser.

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

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/verificacao-tipo-estatico.png">

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

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/tipagem-explicita.png">

## Any 

> Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

```js

let info: any;

info = [123];
info = 'João';
info = true;
info = 10.50;

// Com o tipo any a variável aceitará qualquer valor.

```

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="">


## Inferência de Tipos

> O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.

```js

let user = 'Samara'
user = 10

```

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/inferencia-de-tipos.png">

Ao tentarmos passar um valor número para a variável o TypeScript, mesmo sem informar a tipagem, informará que essa variável só aceita o tipo string.

## Tipos Primitivos

> Esses são os tipos primitivos que podemos utilizar no TypeScript.

```js

let loading: boolean;
loading = false;

let email: string;
email = "joao@email.com";

let price: number;
price = 10.50;
price = 10;

```

## Matrizes

> Existem duas maneiras de tipar arrays (tipo composto) no TypeScript.

```js

let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];

```

## Funções

> Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void.

Dessa maneira, tipamos dessa forma no TypeScript:

```js

function showMessages(message: string):void {
    console.log(message)
}

```

Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

```js

// Exemplo 01
function showMessages(message:string) {
  return 10;
}

// Exemplo 02
function showMessages(message: string) {
   return message;
}

console.log(showMessages("Oi, João"))

```

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/funcoes.png">

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/funcoes.png">

## Union

> O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável.

```js

function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string

```

## Generics

> O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. 

Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra), existem as convenções que podemos seguir:

- <S> → Representando State 
- <T> → Representando Type 
- <K> → Representando Key 
- <V> → Representando Value 
- <E> → Representando Element

- **Exemplo sem Generics**

```js

function useState () {

    let state: number | string;

    function get(){
        return state
    } 

    function set(newValue: number | string){
        state = newValue;
    }

    return {get, set};
}

let newState = useState();
newState.get();
newState.set('Samara');
newState.set(123);

```

- **Exemplo de um trecho de código utilizando generics**

```js

function useState<T>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState();
newState.get();
newState.set("João");
newState.set(123);

```

Se por acaso eu quiser utilizar a noção de "Union" com o generics é só você estender os recursos.

```js

function useState <T extends number | string> () {

    let state: T;

    function get(){
        return state
    } 

    function set(newValue: T){
        state = newValue;
    }

    return {get, set};
}

let newState = useState();
newState.get();
newState.set('Samara');
newState.set(123);

```

**Detalhe:** Poderia dar erro se no useState você colocasse <string> ou qualquer outro tipo de dado específico.

Além disso, podemos definir um padrão quando a pessoa não definir nenhum tipo específico de dado.

```js

function useState <T extends number | string = string> () {

    let state: T;

    function get(){
        return state
    } 

    function set(newValue: T){
        state = newValue;
    }

    return {get, set};
}

let newState = useState();
newState.get();
newState.set('Samara');
newState.set(123);

```

Se você declara um tipo na chamada é esse que será prevalecido.

- **Usando Generics em função com parâmetro**

```js

function sum <T extends number> (a:T,b:T){
    return a + b
}

sum (1,2)

```

## Type

> Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.

Aqui está um exemplo de como podemos reaproveitar tipos de variáveis diferentes.

```js

type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

// Poderiamos ter feito assim
// let userId: string | number | undefined;
// let adminId: string | number | undefined;
// Mas seria repetitivo

userId = 1;
userId = '1';
userId = undefined;

adminId = 1;
adminId = '2';
adminId = undefined;

```

## Type Assertions

> Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

```js

type UserResponse = {
   id: number;
   name: string;
   avatar: string;
}

let userResponse = {} as UserResponse;
// Esse objeto deve ser conforme esse padrão

userResponse.id = 123;
userResponse.name = 'Samara'
// Antes só com o let, não conseguiamos acessar os dados dentro do obj.

```

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/type-assertions.png">

## Objetos

> Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.

```js

type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})

```

- **Resultado do log**

```js

[LOG]: "O eixo x é: 101"
------------------------
[LOG]: "O eixo y é: 50"

```

- **Exemplo 02: User**

```js

// Exemplo 02

type User = {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

const newUser = {} as User;
newUser.age = 19;
newUser.name = 'Samara';
newUser.email = 'samara123@gmail.com';
newUser.isAdmin = true;

```

## Opcional

> Para informamos que uma propriedade é opcional inserimos o sinal de ?

Haverá momentos em que algumas propriedades de objetos serão opcionais.

```js

type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name:'Samara',
    email:'samara@gmail.com',
    age: 19
}

```

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/typescript/type-assertions.png">

## Intersecção de Tipos

> A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

```js

type User = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = User & Char; 
// & = E comercial --> União

let info: PlayerInfo = {
    id: 12,
    name: 'Samara',
    level: 45,
    nickname: 'Luna'
}

// Dica: Apert ctrl + barra de espaço para vê as opções.

```

Poderíamos também substituir um dos tipos filhos e colocar os próprios dados diretamente no type principal.

```js

// Apague o Char
// E o insira no geral

type PlayerInfo = User & {
    nickname: string;
    level: number;
}; 

```

## Interface

> Outra maneira de criar tipagens no TypeScript é utilizando a interface.

```js

interface User {
    id: number
    name: string,
}

let newUser: User = {
    id: 1,
    name: "João"
}

function registerNewUser(newUser: User){
    newUser.id
    newUser.name
}

```

## Type e Interface

> O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

- **O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface**

```js

type TUser = {
    id: number;
    name: string;
    // Não precisamos do "="
}

type TPayment = {
    method: string;
    // Definimos como  "="
}

// Fazendo união com Type
type TAccount = TUser & TPayment


// Exemplo da Interface

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}

```

## tsconfig

> É um arquivo de configuração do TypeScript, ele pode ser escrito tanto em formato de JavaScript quanto no formato JSON.

```js

{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}

```

## Projeto

- **Link do repositório:**
https://github.com/rocketseat-education/lista_presenca/tree/typescript

- **Clonando o projeto:**
git clone https://github.com/rocketseat-education/lista_presenca.git

- **Acessando diretório:**
cd lista_presenca

- **Instalando as dependências:**
npm install

- **Executando o projeto:**
npm run dev

## Adicionando TypeScript

- **Instalando o TypeScript no projeto:**
npm install --typescript --save-dev

- **tsconfig.json**

Crie um arquivo com essa nomenclatura e copie e cole esse código nela.

{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src"
  ]
}

## Tipando Componente

Definindo tipagens para o componente Card...

```tsx

import './styles.css';
import {Trash} from 'react-bootstrap-icons';

type CardProps = {
    name: string;
    time: string;
    index: number;
    onDelete: (index:number) => void;
}

export function Card (props: CardProps){

    const handleDelete = () => {
        props.onDelete(props.index);
    };

    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
            <button onClick={handleDelete}> <Trash/></button>
        </div>
    )
}

```

- **Instalando o @types do react**
npm i --save-dev @types/react

## Tipando Estados

Para tipar os estados precisamos exportar o type do nosso componente Card.

```tsx

export type CardProps = {
  name: string;
  time: string;
}

```

- **Após a exportação, precisamos importar em nosso arquivo Home.tsx**

```tsx

import { Card, CardProps } from '../../components/Card';`

```

- **E em seguida, passar as propriedades para o nosso estado:**

```tsx

const [students, setStudents] = useState<CardProps[]>([]);

```

## Tipando resposta da API

Uma das vantagens do TypeScript é que ele não nos obriga a tipar tudo, apenas no que é crucial. E de resto que é mais intutivo (como o uso da inferência de dados) ele deixa "pra lá".

Mesmo assim, para colocar em prática nossos estudos vamos modificar também a resposta que temos da nossa API.

- **Antes o nosso useEffect estava assim:**

```jsx
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/samarasilvia21')
      const data = await response.json();
      console.log("DATAS: ", data);
      setUser({
        name: data.name,
        avatar: data.avatar_url,
    });
  }
  fetchData();
  },[]);

```

- **Para a tipagem de resposta da API precisamos criar dois types.**

```tsx

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

```

- **Importar as propriedades do nosso type no useEffect():**

```tsx

useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/rodrigorgtic');
      const data = await response.json() as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

```

- **E modificar o nosso estado:**

Antes o nosso useState de User estava fazendo uma inferência dos dados, mas não é o ideal deixarmos assim, porque supondo que exista vários dados...

```tsx

// Antes
const [user, setUser] = useState({name:'', avatar:''}) // Inferência dos dados

// Depois
const [user, setUser] = useState<User>({} as User)

```

## Referências

- https://1library.org/article/sistemas-tipos-est%C3%A1ticos-din%C3%A2micos-sistemas-tipos.q0152vxz#:~:text=Um%20sistema%20de%20tipos%20%C3%A9%20um%20m%C3%A9todo%20sint%C3%A1ctico,de%20programa%C3%A7%C3%A3o%20com%20tipifica%C3%A7%C3%A3o%20est%C3%A1tica%2C%20n%C3%A3o%20s%C3%A3o%20formalmente
- https://www.typescriptlang.org/tsconfig