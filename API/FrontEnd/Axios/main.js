// Consumindo API com Axios 

// Local onde a requisição vai bater
const url = 'http://localhost:5500/api' 

// Coletando todos os usuários com fetch de forma mais facilitada
const getUsers = () => {
    axios.get(url)
    .then(response => renderApiResult.textContent = JSON.stringify(response.data)) // convertir os dados para json
    .catch(err => console.error(err))
}

// Coletando usuários pelo ID
const getUser = (id) => {
    axios.get(`${url}/${id}`)
    .then(response => {
        userID.textContent = response.data.id
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(err => console.error(err))
}

// Adicionando usuários
const addUser = (newUser) => {
    axios.post(url, newUser)
    .then(response => alertApi.textContent = response.data)
    .catch(err => console.log(err))
}

// Atualizando Dados pelo ID
const updateUser = (updatedUser,id) => {
    axios.put(`${url}/${id}`, updatedUser) // texto simples + chaves - ele interpreta como caracter e não como json
    .then(response => alertApi.textContent = response.data)
    .catch(err => console.log(err))
}

// Deletando Usuários pelo ID
const deleteUser = (id) => {
    axios.delete(`${url}/${id}`)
    .then(response => alertApi.textContent = response.data)
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
//addUser(newUser[0])
//addUser(newUser[1])
//updateUser(updatedUser,2)
//deleteUser(4)

// Console
console.log(getUsers())