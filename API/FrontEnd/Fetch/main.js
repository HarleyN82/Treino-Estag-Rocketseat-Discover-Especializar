// Consumindo API com Fetch 

// Local onde a requisição vai bater
const url = 'http://localhost:5500/api' 

// Coletando todos os usuários com fetch de forma mais facilitada
const getUsers = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data)) // convertir os dados para json
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

// Coletando usuários pelo ID
const getUser = (id) => {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

// Adicionando usuários
const addUser = (newUser) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers:{
            "Content-type": "application/json; charset=utf-8",
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}

// Atualizando Dados pelo ID
const updateUser = (updatedUser,id) => {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser), // texto simples + chaves 
        headers:{
            "Content-type": "application/json; charset=utf-8",
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}

// Deletando Usuários pelo ID
const deleteUser = (id) => {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-type": "application/json; charset=utf-8",
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}

// Objeto para criar usuários
const newUser = [
    {
        name:"Olivia Zars",
        avatar: "https://source.unsplash.com/random",
        city: "Rio do Sul"
    },
    {
        name:"Emma Jones",
        avatar: "https://source.unsplash.com/random",
        city: "Dublin"
    },
    {
        name:"Thomas H",
        avatar: "https://source.unsplash.com/random",
        city: "Inglaterra"
    },
]

// Objeto para atualizar usuários
const updatedUser = {
    name:"Marcelo Clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

// Executando as Funções

getUser(1)
//deleteUser(4)
//addUser(newUser[0])
//addUser(newUser[1])
//updateUser(updatedUser,2)

// Console
console.log(getUsers())