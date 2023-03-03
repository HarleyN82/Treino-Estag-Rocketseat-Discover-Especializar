# React JS

> Uma biblioteca JavaScript que tem o objetivo de criar interfaces.

- **Por que React JS é uma biblioteca e não um framework?** 
Porque, ele não tem uma opinião forte, ou seja, uma estrutura bem definida de pastas e regras que os frameworks em si têm. Ele te dá mais liberdade para criar as interfaces da maneira que preferir. Em suma, ele não tem uma estrutura pronta com componentes nativos como é o caso do React Native.

**Por exemplo**, para criar um espaço eu posso:
    - Criar uma div, section... --> React JS
    - Usar a View, um componente do React Native que pode funcionar como todas as outras tags anteriores.

## Criando Projeto 

Ao criar um projeto utilizando o React JS podemos utilizar os seguintes boilerplates:

- Create React App (CRA)
- Vite

❗Dica: Boilerplates se refere a seções de código que devem ser incluídas em muitos lugares. É um template, ou seja, uma forma padrão de se escrever algo que pode ser copiado.

## Quais as vantagens de utilziar Vite ao invés do CRA ?

O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://user-images.githubusercontent.com/113690864/222425069-d1b2deb3-ccce-44f8-b64d-650a98a6fc4c.png"> **Criando o primeiro projeto com o Vite:** `npm create vite@latest reactapp --template react`

Colocamos "Template" para identificar que o projeto que estamos fazendo é React.

- Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar.

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/criando-o-projeto-1.png"> 

- Em seguida, será questionado sobre a variant, escolheremos react que representa que não usaremos o TypeScript nesse projeto.

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/criando-o-projeto-2.png">

## Executando Projeto

Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio terminal, utilizando o comando cd ou arrastando a pasta do projeto para dentro do VS Code.

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o npm quanto o yarn como gerenciador de pacotes.

Certifique-se que está na pasta do projeto e execute o comando desejado:
    - `yarn install`
    - `npm install`

Após a instalação das dependências, execute o comando abaixo:

_Utilize o mesmo gerenciador do comando anterior_
    - `npm run dev`
    - `yarn dev`

Após executar o comando acima, abra o seu navegador e acesse o endereço: `http://localhost:5173/`

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/executando-projeto.png">

## Estrutura do React

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estrutura-de-um-projeto.png">

Quando criamos um projeto ReactJS utilizando o Vite, essa será a visualização da nossa estrutura inicial de pastas do nosso projeto.

O arquivo index.html é o principal arquivo do nosso projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.

```html

<!--index.html-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

```jsx

// main.jsx

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

```

O React manipula a dom  - árvore e elementos que é redneirizado no navegador -.

O arquivo main.jsx terá a função de renderizar o componente <App /> e inserir através da DOM do nosso HTML pelo id root.

src = source

No React não precisa colocar extensão para componentes, por isso a importação do <App /> não tem App.jsx.

## JSX

> É uma extensão do JavaScript bem semelhante ao HTML. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags HTML.

Exemplo de um trecho de código JSX:

```jsx

//a] App.jsx

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count} {/*Usa-se chaves para JS*/}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

```

No react sempre precisa de um `return` e esse retorno da função que estavamos criando será um conteúdo html, assim se eu quiser colcoar uma função, if...else e ademais estruturas da linguagem JS eu preciso utilizar {}. 

Obs: Cada arquivo que criamos vamos ser grandes funções que tem como objetivo renderizar algo para o html. Nesse caso, é apenas uma "home", com as logos, um botão e afins.

## Estrutura das Pastas e Arquivos

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estrutura-pastas-e-arquivos.png">

📁 node_modules - A pasta onde ficam todas dependências e módulos do nosso projeto. Ele não está de acordo com a quantidad de dependências do nosso projeto, ou seja, pode-se ter apenas 4 e termos vários arquivos node.

📁 src - Pasta principal onde ficará todos os nossos arquivos.

- **App.css** - Arquivo de estilização do App.jsx.

- **App.jsx** - Página inicial do nosso projeto que será exibida no navegador. Loog, arquivo com a interface já criada

- **favicon.svg** - Ícone de favorito da página. index.css - Arquivo de estilização global.

- **logo.svg**- Arquivo de imagem da logo do ReactJS. 

- **main.jsx** - Arquivo responsável por inicializar nossa aplicação.

- **index.html** - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

- **.gitignore** - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github.

- **package.json** - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

No caso, é um arquivo de configuração utilizado para estipular e configurar dependências do seu projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados. Através dele conseguimos deixar claro uma "receita" para executar um projeto.

- **package-lock.json** - Parecido com o package.json, esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

- **vite.config.js** - Arquivo de configuração do Vite.

## Fragment

> Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

```jsx

// Home.jsx

function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}

export default Home;

```

No exemplo acima, poderia ser utilizado uma <div> para agrupar esses três elementos. Mas o importa é que elementos JSX precisam estar embrulhados por uma tag de fechamento. 

Se tivessemos apenas um único elemento filho, por exemplo, só o h1, então não teria problema, mas como são três é preciso desse "embrulho". Porque, precisamos devolver apenas um único elemento.

Assim, o retorno dessa função um pacote com um único elemento embrulhados pelo fragmente, uma possível estratégia nessa questão.

## Importanto Arquivos CSS

A importação de um arquivo global deverá ser realizada no arquivo main.jsx

- global.css

```css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

```
- main.jsx

```jsx

import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

// Arquivo de estilização global
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

```

🔅 **Dica:** Diferentemente dos outros arquivos no CSS precisamos colocar uma extensão.

Quando usamos uma função sem a estrutra "export default nomeDoArquivo" e colocamos diretamente "exprot function...", precisamos no arquivo "main.jsx" colcocar na importação do arquivo {nomeDoArquivo}.

## Estilizando Página CSS

Nesta aula, estilizamos toda a nossa página utilizando os conceitos do CSS.

```css

/*styles.css*/

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container h1 {
  margin: 84px 0 24px;
}

.container input {
  width: 50%;
  padding: 24px;

  background: #e6e6e6;
  border-radius: 5px;
  border: none;

  font-size: 16px;
}

.container button {
  width: 50%;
  padding: 24px;

  font-weight: 700;

  background: #ea4c89;
  color: #fff;

  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  font-size: 16px;
}

.container button:hover {
  filter: brightness(0.9);
}

```

- **Resultado:**

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estilizando-pagina-css.png">

## Importando Fonte

Para utilizar fontes personalizadas em nosso projeto, podemos prover do serviço que a Google nos oferece, o Google Fonts.

Após a escolha das fontes, devemos aplicá-las em nosso projeto em dois arquivos:

- index.html

```HTML

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Importação das fontes. -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

  <title>App Lista de Presença</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>

```

- global.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Aplicando fontes personalizada. */

body,
input,
button {
  font-size: 16px;
  font-family: "Roboto", sans-serif;

  --webkit-font-smoothing: antialiased;
}

```

- **Resultado:**

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/importando-fonte.png">


## Componentes

> Componente nada mais do que um bloco de código reutilizável e independente. Nessa aula, criamos o nosso primeiro componente Card

Estrutura de um componente:

📁 Components 
📁 Card

```jsx

import "./styles.css";

export function Card() {
  return (
    <div className="card">
      <strong>João Inácio</strong>
      <small>10:15:24</small>
    </div>
  );
}
```

- styles.css

```css 

.card {
  height: 100%;
  width: 50%;

  background: #735bf2;
  color: #fff;

  border-radius: 10px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.card strong {
  font-size: 18px;
}

```

- **Resultado:**

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/componentes.png">


## Propriedades

> As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

- Componente Card: 

```jsx
import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
```

- Renderização do componente Card:

```jsx

<Card name="Rodrigo" time="10:55:25" />
<Card name="João" time="11:00:10" />
<Card name="Ana" time="12:10:33" />

```

Cada componente está sendo renderizado de acordo com as propriedades que estão sendo passadas. No caso, temos 4 o mesmo componente, mas com propriedades diferentes.

Nós podemos também desestruturar, colocando {} nos parâmetros e ao invés de colocar um meio termo para acessar as propriedades "props" você as chama diretamente, por exemplo:

```jsx
import "./styles.css";

export function Card({name,time}) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
```

- **Resultado:**

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/propriedades.png">

Lembrando que toda essa configuração é manual e não está lincada com o botão de click.

## Estado (Use State)

> O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

A diferença entre uma variável e um estado....

- **onChange:** Toda vez que o conteúdo do input muda ele me entrega um evento e dentro dele executar uma ação.

A forma como está aqui não vai alterar a nossa interface de forma automática e associativa ao digitarmos no input.

```jsx

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {

  let studentName = '';

  function handleNameChange(name){
    studentName = name;
  }

  return (
   <div className='container'>
     <h1>Nome: {studentName} </h1>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => handleNameChange(e.target.value)} // Acessaremos o valor de dentro do input
      />
      <button type="button">Adicionar</button>
      <Card name="Thomas" time="10:55:25"/>
      <Card name="Emma" time="11:00:10"/>
      <Card name="Matheus" time="11:30:25"/>
      <Card name="Scarlet" time="12:15:35"/>
   </div>
  )
}

``` 

Quando queremos utilizar o conteúdo de uma variável para refletir na nossa interface, então precisamos de um estado. 

Variável pode ser usada para armazenar valores, fazer cáculos e afins. Mas um estado toda vez que muda vai gerar uma nova renderizar na nossa interface.

Isso porque, o react tem um algoritmo de reconciliação e consegue verificar a árvore de elementos da dom e vê o que mudou ou não.

- **UseState:** É um hook que premite criar um estado.

A sua estrutura é, contendo dois elementos: `const [studentName,setstudentName] = useState();`
  - studentName: Armazenar o valor da variável atual; (O estado em si)
  - setStudentName: Função que atualiza esse estado.

Dessa forma, estamos pegando o valor atual do input e atualizando o nosso estado através desse set.

Além do que, podemos passar um vlaor inicial pro estado. Por exemplo, se fosse criar um contato o valor inicial seria `useState(0)`.

```jsx

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  );
}

```

- **Resultado:**

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estado.gif">

## Imutabilidade

> O conteúdo da variável não deve ser modificado e sim substituído. Ou seja, é o princípio que os estados do React respeita. É mais performático.

Ela faz parte do paradigma da programação funcional.

Devido ao seu carácter performático, não alteramos um estado diretamente, mas usamos uma função para isso.

- index.jsx

```jsx

import React, {useState} from 'react';
import './styles.css'

// Importanto Componentes

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudent] = useState([]); // Vai se armazenar os estudantes da lista de presença

  function handleAddStudent(){

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    // Sem esse recurso o sistema funcionava susbtituindo os estudantes que eram adicionados na nossa lista, ou seja, ele respeitava a imutabilidade. Mas como a gente queria a sensação de mudança, fizemos essa estrutura, recuperando o que eu tinha antes e colocando o novo.

    setStudent(prevState => [...prevState, newStudent]);

    // Preciso recuperar os dados antes + juntar com os novos
    // Pode-se colocar qualquer nome como state...
    // Nesse caso, respeitando a imutabilidade estamos substituindo o valor inteiro
    // Spread Operator =  Permite espalhar um array em locais onde se espera múltiplos parâmetros.
    // Pega o conteúdo anterior do seu estado e coloca nessa variável, se não vai ficar assim: (teste sem o (...))
    // ['Rodrigo]
    // [['Rodrigo], Amanda] = O conteúdo anterior que já é um vetor + o novo.
    // Da forma como fizemos tudo fica no mesmo vetor.

  }

  return (
   <div className='container'>
     <h1>Lista de Presenças</h1>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)} // Acessaremos o valor de dentro do input
      />

      {/*Como a função não tem parâmetro, então só precisa chamá-la e nem precisar colocar () */}
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {/* Ao fazermos isso (envolver o card com {} ) estamos informando que queremos usar o conteúdo de uma variável*/}
      {
        // Map - A cada iteração vai rodar um estudante
        // Para cada estudante eu quero renderizar um cartão
        // Student é apenas uma variável auxiliadora

        students.map(student => <Card name={student.name} time={student.time}/>)

      }
   </div>
  )
}

```

Fizemos essa função para que pudessemos adicionar vários alunos e de forma automática gerar o card, configurado automaticamente com o tempo atual. 

Antes estávamos fazendo tudo de maneira manual, então usamos esse princípio da imutabildiade para automatizar esse processo.

- **Resultado:**

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/imutabilidade.gif">

## Key Prop

> Em uma listagem, normalmente utilizamos o map() do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade key para que esse dado nunca se repita e evitar que erros desse tipo aconteçam.

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/key-prop.png">

Usamos uma Key Prop para as listagens ficarem mais performáticas, principalemnte quando precisar deletar ou ajudar o react quando precisar uma análise dos componentes para saber qual componente foi ou não afetado por um estado e etc...

Outra coisa, a key precisa ser única. Então, o ideal seria utilizar um ID.

Para evitar esse tipo de erro, passamos a prop Key, veja o exemplo:

## Hooks

> São funções que permitem ligar conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

A motivação de sua criação foi que: Anterioremente, era comum o uso de classes, mas agora é recomendado o uso de funções (funcionais).

E para beneficiar os desenvolvedores de forma completa foi, então criado hooks, funções mais simples, independentes e flexíveis.

Como padrão sua estrutura é: `use + nomeDoHook`.

## Header
> Nessa aula, criamos uma tag <header> em nossa Home para indicar quem é o usuário que está editando a lista de presença.

- **index.jsx**

```jsx

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>João Inácio</strong>
          <img src="https://github.com/birobirobiro.png" alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

```

- **styles.css**

```css

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container header {
  width: 50%;
  margin: 84px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container header img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 7px;
}

.container header div {
  display: flex;
  align-items: center;
}

.container input {
  width: 50%;
  padding: 24px;

  background: #e6e6e6;
  border-radius: 5px;
  border: none;

  font-size: 16px;
}

.container button {
  width: 50%;
  padding: 24px;

  font-weight: 700;

  background: #ea4c89;
  color: #fff;

  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  font-size: 16px;
}

.container button:hover {
  filter: brightness(0.9);
}

```

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/header.png">


## useEffect

> O useEffect é executado automaticamente sempre que o componente é renderizado.

A estrutura do useEffect é da seguinte forma:

```js
useEffect(() => {
 // Dentro do objeto devemos colocar todas ações que serão executadas.
// Os arrays definem quais os estados que o useEffect depende.
}, []);
```





## Consumindo API
## useEffect Async
## Referências

- https://dev.to/lixeletto/vite-js-o-build-tool-que-vai-facilitar-a-sua-vida-15ho
- https://www.flaticon.com/free-icon/code_1157109?term=code&page=1&position=33&origin=search&related_id=1157109
- https://blog.rocketseat.com.br/como-fazer-um-bom-readme/
- https://luby.com.br/desenvolvimento/software/tutoriais/como-criar-um-projeto-com-vite/
- https://gabrieluizramos.com.br/entendendo-o-package-json