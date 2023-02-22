# Trabalhando com API`s

- Aprendemos sobre API´s, porque esse recursos nos ajuda a trocar informações entre sistemas seja do mesmo servidor até sistemas de onde não temos acesso. 
    - Ex: Logar com uma conta do google em um site ou jogo que não envolve o google.
    - Pagamento de Terceiros: Quando você acessa um site com seus dados e aparece que o pagamento será feito por um banco. Esse sistema do site pegar suas informações e se conectar com outro sistema é feito por uma API.
- API´s servem para estruturar qualquer aplicação web para os dias de hoje, tendo como principal característica a troca de informações entre apps, sites e afins de forma padronizada.

## Conceito de API

> Application Programming Interface, ou seja, é uma aplicação voltada ao intermédio de sistemas, possibilitando diversas conexões, por meio de uma série de padrões e protocolos. Além disso, ela é criada por uma empresa, geralmente, quando a organização tem a intenção de que outros softwares usufruam de seus serviços. 

- **Analogia do Restaurante**
    - Chamamos o garçon e fazemos o pedido, porque nós não podemos ir diretamente até a cozinha e fazer isso.
    - Então, ele vem a mesa, anota o pedido e leva até a cozinha.
    - A cozinha tem a responsabilidade de preparar o pedido.
    - Quando a comida estiver pronta o chefe vai avisar o garçon que trás o pedido a nossa mesa.
- **Explicação da Analogia**
    - Clientes: Usuários
    - Mesa: Front-End, aplicação que conversa com o usuário.
    - Garçon: API, recebe o pedido do front, manda pro back e após recber os dados entrega para o front. (não tem influência de como os dados serão tratados)
    - Cozinha: Back-End, aplicação que conversa com o servidor/sistema externo. Vai preparar os dados.

## JSON

É um formato de arquivo leve para organizar seus dados, no qual, independente da linguagem, os seres humanos conseguem ler e as máquinas conseguem gerar.

```json
{
    "nome":"Samara Silvia",
    "idade": 19,
    "cidade": "Recife",
    "filmes_favoritos" : [
        "A Cabana",
        "Os vingadores",
        "A 5 passos de você"
    ],
    "hobbies":{
        "semana": "leitura",
        "fim_de_semana": {
            "sabado": "cinema",
            "domingo": "park",
            "outros": [
                "caminhada",
                "netflix",
                "natação"
            ]
        }
    }
}
```

- Ele sempre começa com { } e é composto por chaves e valores, ambos marcados com "", caso seja um caracter.
- Armazena qualquer tipo de dado: String; Number; Object; Array...

## Métodos HTTP

Os 5 principais métodos ou verbos HTTP são:

- `Get:` A API fornece informações. Precisa devolver dados;
    - Ex: https://api.github.com/users/samarasilvia81 - Sempre que passamos informações
- `Post:` A API recebe informações que devem ou não serem registradas;
    - Quando criamos um repositório, preenchemos as informações e enviamos do front do git para o back do git.
- `Put:` A API recebe informações para update de um ou mais registros;
    - Ao acessar https://api.github.com/users com todos os usuários do git e colocamos na porta put + dados, o git vai atualizar esses dados.
- `Patch:` A API recebe informações para update de um registro;
    - Ao acessar https://api.github.com/users com todos os usuários do git e colocamos na porta put + dado, o git vai atualizar esse dado (apenas um único registro).
- `Delete:` A API recebe identificadores de registros que devem ser apagados;
    - Ao acessar https://api.github.com/users com todos os usuários do git e colocamos na porta delete + identificador, ele automaticamente irá deletar este dado.

## Express

> O Express é um framework para aplicativo da web do Node.js

Esse frame junto com o Node.js contribue para termos um lado back-end dentro do front-end com a mesma linguagem de programação - JavaScript -.

O Express fornece uma camada fina de recursos fundamentais, principalmente à construção de API´s, para aplicativos da web, sem obscurecer os recursos do Node.js.

Ele possui funções nativas/próprias que ajudam a ouvir os eventos, render páginas, puxar os métodos http e afins.

## Insominia

> O Insomnia é um aplicativo de desktop de código aberto que elimina a dor de interagir e projetar, depurar e testar APIs.

É um programa para fazer as requisições como post, put...

Como o navegador se limita a apenas executar o método get, ou seja, recebendo apenas as requisições e as respostas. Todo o processo de criar registros, alterar dados e afins é preciso de uma ferramenta para fazer o gerenciamneto. Além disso, temos o express que vai ser usado para criarmos o ambiente de servidor e aplicamros no insomnia.

Assim, usamos a insominia que funciona como o postman para testar as rest apis.

## API no Back-End

> Vamos criar uma api no backend com a criação de um servidor, por meio do express, atrelado a ferramenta insomnia.

- Configurando o Ambiente
    - Instale o pacote npm: `npm i -y`
    - Instale o express: `npm i express`

## Criando o Server

Vamos criar um arquivo chamando `index.js`, no qual conterá o servidor para a nossa api.

Para nos conectarmos com esse servidor digite no seu navegador: `localhost:3000`. Por não termos criado nada ainda aparecerá um erro de busca. Mas que pode ser solucionado com o código abaixo.

```js
// Primeiro Chamamos o Express
const express = require('express'); // chamando o módulo
const app = express() // app = contração para aplicattion 
// express () = inicializando do express

app.listen('3000') // ouvindo a porta do navegador = server
```

Feito isso, após rodar o arquivo no terminal, por não ter nenhum contéudo, mas a criação do servidor, então só va aparecer que não consegue puxar nenhum dado - Cannot GET / - 

- Dicas: 
    - Digite `node .` no terminal e se o seu arquivo estiver como "index.js" assim como no "package.json", então já vai abri-lo normalmente.
    - Digite `ctrl+c` para parar o terminal.
    - Toda vez que alterar algo no js, é preciso rodar o terminal de novo.
    - Para fins organizacionais você pode deixar esse código exclusivamente em um único arquivo chamado "server.js" e toda a manipulação no "index.js".

## Method Get 

Vamos iniciar o nosso CRUD (Create - Read - Update - Delete) com o método GET.

```js

// Method Get
// Route - função para compor as rotas que o site vai fazer
// Toda requisição precisa de uma requisição (req) e de uma resposta (res)

app.route("/").get((req,res) => res.send("Hello"))
app.route("/sobre").get((req,res) => res.send("Hello sobre"))

```

"/" signfica o subdominio do seu site, ou seja, onde está a rota/página que você quer. E quando não tem nada após essa barra (/) significa que você está na sua rota padrão, logo na sua home.

## Method Post 

Vamos agora criar dados e não apenas puxar, assim vamos mandar informações de fora para dentro da API.

```js 

// Method Post
// Receber informações de fora para dentro da API

app.route('/').post((req,res) => res.send(req.body)) // Pega o corpo da requisição e enviar para o insominia como send
// console.log(req.body) // veremos a requisição no console apenas

```

Obs: Como o navegador só pega o method get, então precisamos usar o insominia para fazer as demais requisições.

###  Usando o Insomnia

- Crie um ambiente de desenvolvimento `Request Collection`.
- Crie uma requisição post e coloque a nossa url no campo de input.
- Só para testar crie também uma requisição get.
- Onde tem escrito "body" selecione o formato de texto "json" e escreva o seguinte código, para que a gente possa vê uma resposta do servidor.

```json

// Insomnia

{
    "content":"Samara Silvia"
}

```

- Como o que está dentro do body é um texto em json, para que a nossa api recebe os dados ela precisa converter esses dados para json, então criamos um middleware.
- Isso porque, quando recebemos algo na API precisamos informar que é algo Json.

```js

// Middleware
// Ponte entre as requisições, ou seja, precisamos converter para JSON
// "use()" é uma função do express para usar algo dentro do express, nesse caso usar o formato de texto "json".

app.use(express.json()) // usamos o express cru para fazer essa conversão

```

❗ **Fluxo do Processo:** Insomnia vai procurar a rota "/" descrita no nosso arquivo server.js, no qual se conectar com a url que passamos. Depois disso, irá buscar um método que seja igual ao que foi coloco na ferramenta, no caso o "post". Por fim, antes de executar o que está dentro desse método ele vai pegar o "meio do caminho" que é converter tudo que vem para o formato json. Assim, quando ele executar as requisições e repostas no seu "terminal" irá aparecer no formato que estabelecemos.

## Method Put 

Agora vamos "editar" informações com o método Put, ou seja, pegamos como referência a chave dos dados e alteramos os seus valores. (continuaremos com o insomnia)

- Crie uma requisição put 
- No Body + Json escreva o novo contéudo
- Vamos usar o method get para vermos os dados anteriores, assim é bom "eliminar" o get anterior para que as informações não se confundam.

```js

// Method Put
// Se colocarmos apenas o "res.send(author)" ele vai mostrar o valor dentro da variável que criamos

let author = "Samara"

app.route('/').get((req,res) => res.send(author)) // Se eu colocar "req.body" vai mostra tudo no formato JSON, mas ao mostrar apenar o "author", então ele vai puxar o valor da variável 
app.route('/').put((req,res) => {
    author = req.body.author  // res.body = a variável vai receber a chave e o contéudo como json
    // Vamos alterar o "Samara" para a informação que está dentro do body
    res.send(author) // irá mostrar a alteração no retorno
})

```

## Method Delete

Para finalizarmos o nosso crud, vamos estar deletando dados, por meio de parâmetros, ou seja, variáveis dadas no cabeçalho.

- Primeiro vamos testar o nosso método com o seguinte código

```js
app.route('/').delete((req,res) => { res.send("apagado")
})

```

❗ Obs: É importante destacar que o delete recebe sempre algum `identificador` na rota para que ele possa saber o que está apagando. Quando passamos variáveis na rota as chamamos de `parâmetros`.

- De maneira ilustrativa, é como se dentro do method estivesse limpando o valor da variável

```js

let where = "Londres"
app.route('/:where').delete((req,res) => { 
    where = ""
})

```

- Mas a maneira correta de fato é a seguinte

```js

// Method Delete
// :identificador - Informando o dado específico que queremos deletar
// Os ":" indica que é uma variável que está sendo passada

app.route('/:identificador').delete((req,res) => { 
    res.send(req.params.identificador)
})

```

- Testando realmente o método vamos colocar no input a rota `localhost:3000/0101`, pois o insominia vai identiicar que é para deleter/limpar esse dado e vai exibir qual dado/id.... foi deletado.
- O "localhost:3000/0101" foi armazenado na variável identificador.
- Essa variável vem dentro da requisição que vai estar dentro de "params" - todas as variáveis da url - e pudemos pegar ela atráves do ".identificador".


## Parâmetros nas Requisições

São formas de passar para dentro do nosso código informações que não estavam lá antes.

Formas de passar parâmetros nas requisições:
    - **Forma A:**
    localhost:3000/?name=samara - porque, programos o nosso código para receber informações desse tipo.
    - **Forma B:**
    localhost:3000/qualquer coisa - O navegador vai mostrar o que passamos
    - **Forma C:**
    É atrás do próprio body (post) e quando se envia, pode-se trabalhar com elas.

As informações que passamos para a api são chamadas de parâmetros e elas são requisições, porque são pedidas, ou seja, requisitadas.

## Body Params

- Informações enviadas para API, mas que não ficam na URL.
- Ele só é enviada através do put, patch...
- Como sempre devemos criar um servidor para se conectar com a nossa api. E para este tópico usaremos o seguint tópico:

```js

const express = require('express'); // chamando o módulo
const app = express() // contração para aplicattion - inicializando o express
app.listen('3000')

app.route('/').get((req,res) => {
    res.send('olá') //console.log(req.body) // body está dentro da requisição
})

app.use(express.json())

app.route('/').post((req,res) => {
    const {nome,cidade} = req.body // pegamos valores específicos
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`) // body está dentro da requisição
    // Usamos template string para envolver as variáveis e as strings.
})

```

- Não esquecendo de no insomnia colocar no body o json com este código:

```json

// Method Post

{
	"nome": "Samara Silvia",
	"Cidade":"Recife",
	"Filmes_favoritos":[
		"A Cabana",
		"Os vingadores",
		"Flashpoint"
	]
}

```

## Route Params

- Agora vamos pegar os parâmetros pela rota.
- Tudo que vem após a barra - :/ - virá um variável no nosso código
- O nome que colocamos é apenas referencial
- Para isso vamos criar primeiro o nosso servidor

```js

// Route Params

const express = require('express');
const app = express()
app.listen('3000')

// Criamos um get padrão só por conveniência
app.route('/').get((req,res) => res.send("Olá"))

// Ao invés de escrevermos olá, mas passar o parâmetro
app.route('/:variavel').get((req,res) => {
    res.send(req.params.variavel)
})

```

Dessa forma, indo no input e colocando "localhost:3000/Pessoa" a ferramenta irá retornar o valor da minha variável que é "Pessoa'. 

❗ Obs: Se eu colocar um barra e escrever outra coisa, ele vai entender como outra variável e se não tivermos um local para armazená-la, então dará o seguinte erro "Cannot GET /Sou%20Linda/Samara".

- Outra coisa que podemos fazer é limitar a rota a um nome específico.

```js

app.route('/:variavel').get((req,res) => {
    res.send(req.params.variavel)
})

// Mas dessa vez só será chamada, exclusivamente, se após o barra tiver "identidade"
app.route('/identidade/:variavel').get((req,res) => {
    res.send(req.params.variavel)
})

```

## Query Params

- Passar parâmetros através da URL
- As querys são identificadas na url, por meio da "?"
- Assim, toda vez que tiver ela, ao seu lado poderá ser colocado a variável, o símbolo de "=" para dizer que vai receber um valor e depois o valor propriamente dito, ficando assim:

```js
localhost:3000?nome=samara
```

- Vamos construir o nosso código para receber essa estrutura

```js
// Query Params

const express = require('express');
const app = express()
app.listen('3000')

app.route('/').get((req,res) => res.send(req.query))
```

- Podemos criar várias variáveis também com o uso do s comercial - $ -

```js
localhost:3000?nome=samara&cidade=Recife
```

- Para filtrarmos as variáveis é só especificar após a query, mas se o valor da variável que colocamos não existir, ao rodar o insomnia não irá enviar nada.

```js

const express = require('express');
const app = express()
app.listen('3000')

app.route('/').get((req,res) => res.send(req.query.nome))

```

- Podemos imendar o "req.query" em um novo tipo de rota, por exemplo:

```js

// Como não há nada, então vai retornar vazio {}, mas se colocarmos dados na url, então irá retornar esse dados normalmente

app.route('/').get((req,res) => res.send(req.query)) // req.query.nome
app.route('/about/user').get((req,res) => res.send(req.query)) // vamos mostrar as querys dessas rotas

```

- Assim, teremos a resposta já em JSON

```json
{
	"nome": "samara",
    "cidade": "Recife"
}
```

## API DO GITHUB 

> É uma api disponibilizada pela github com seus próprios dados.

- Para acessar as informações que regem essa api é só endereçar no navegador: https://docs.github.com/pt/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28
- A api de fato é acessada pelo link: https://api.github.com/
    - Aqui pode-se vê vários recursos que ela pode disponibilizar como os usuários, repositórios, emojis e afins.
    - Ao acessarmos as infos sobre os usuários, por exemplo, colocamos https://api.github.com/users/{user}, no qual as {} representam o nome do usuário - https://api.github.com/users/samarasilvia81
- São exibidos os dados quando colocamos qualquer URL no navegador dessa api, porque são informações públicas. Para acessar os dados privados é preciso informar a api do github que eu sou o usuário. 
- Da mesma forma, para fazer os métodos put, post... é preciso estar autenticado.

## Consumindo API do Github dentro do BackEnd Node + Axios

Express não faz requisição de API. A gente usa para criar a API, fazer as rotas e afins. Mas ele por si só não tem um método para ir e uma api e buscar os resultados dela (a não ser a nossa própria api). Então, vamos usar outro módulo o - AXIOS -.

- Instalação: `npm i axios`
- Precisamos importar o axios no nosso arquivo js para que ele junto com o express possam trabalhar na api do github.

```js
const axios = require('axios');
```

- Tendo importando, vamos usar o método get do axios para puxar os dados da api do github dentro da rota que estabelecemos com o express.

```js
app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/samarasilvia81')
})
```

- Como o axios trabalha com promises, então terá .then,.catch...
- O axios quando trabalha com API ele traz como resultado várias informações e uma delas chamada "data" que está a resposta da URL.

```js

app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/samarasilvia81')
    .then(result => res.send(result.data))
    // .then(result => res.send(result.data.avatar_url)) // caso queira informações especifícas.
    // .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) // dessa forma a própria imagem é exibida
    .catch(error => console.error(error))
})

```

- Então, vimos com o exemplo passado que podemos passar tags html com o axios.
- Para isso é só colocar `crases` e as variáveis dentro de template strings.

```js
// Tags HTML com Axios
.then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
```

## Front-End com Fetch

> A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP.

Antes de iniciarmos os projetos precisamos instalar algumas dependências:

- nodemon: É uma ferramenta usada para reinicar automaticanete o servidor quando as alterações de arquivo no diretório são detectadas. `npm install --save-dev nodemon `
- cors: É um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens `npm install cors`

### Criando arquivo Html

Vamos criar um arquivo html para melhor estruturar os dados (resultados) expsotos pela API.

```html

<!--index.html-->
<div id="renderApiResult"></div>

```

Dica: Se você escrever "#renderApiResult" e der um tab, por meio do Emmit Abreviation você cria uma div com esse id.

## Criando e Configurando o arquivo JS - Fetch e Axios

- Para a criação da nossa API utilizamos a estrutura criada por rocketseat dispostas no arquivo "server.js". Nele, está esquematizado toda a lógica dos métodos http (get, post,put...).
- Para o consumo dos dados usamos a API Fetch no arquivo "main.js".
- Obs: Como o Axios é um cliente HTTP, então ele pode acessar diretamente os métodos http (axios.get,axios.post...). Diferentemente do Fetch que funciona mais para buscar e, por meio da sua configuração (method: "POST") que vamos decidir qual tipo de busca ele vai fazer.

## Conclusão

Por meio deste curso pudemos aprender a criar nossas apis e consumí-las com Axios e Fetch, além de renderizar suas respostas no html. Ou seja, houve manipulação no front e backend.

## Referências

- https://json.org/json-pt.html
- https://www.npmjs.com/package/axios
- https://www.w3schools.com/whatis/whatis_json.asp
- https://expressjs.com/pt-br/
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs
- https://hcode.com.br/blog/usando-insomnia-para-testar-as-requisicoes-de-nossas-apis
- https://www.npmjs.com/package/cors
- https://www.npmjs.com/package/nodemon
- https://www.ibm.com/br-pt/topics/data-pipeline
- https://www.atlassian.com/br/git/tutorials/saving-changes/gitignore
- https://docs.github.com/pt/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28
- https://developerplus.com.br/o-que-sao-arrow-functions-e-como-usar/#:~:text=A%20Arrow%20Function%20%C3%A9%20caracterizada%20por%20uma%20seta,a%20mesma%20coisa%2C%20mas%20com%203%20nota%C3%A7%C3%B5es%20diferentes.