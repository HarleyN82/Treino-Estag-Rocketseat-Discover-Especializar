const express = require('express');
const axios = require('axios');

const app = express();

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));

app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/samarasilvia81')
    // .then(result => res.send(result.data)) // todos os dados
    // .then(result => res.send(result.data.avatar_url)) // link da imagem 
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>
    <h1 style="color:blueviolet">${result.data.bio}</h1>`)) // tags html + css + axios
    .catch(error => console.error(error))
})