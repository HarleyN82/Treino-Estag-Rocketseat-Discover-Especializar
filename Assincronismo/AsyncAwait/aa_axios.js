// Async/Await com Axios

// A maneira comum de se trabalhar é

import axios from "axios";

axios
  .get("https://api.github.com/users/maykbrito")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));

// 1. Forma 01 - Simplificada
// Colocamos tudo dentro de uma variável

import axios from "axios";

async function fetchRepos(){
  const user = await axios.get("https://api.github.com/users/maykbrito")
  const repos = await axios.get(user.data.repos_url)
  console.log(repos.data)
}

fetchRepos().catch((e) => console.log(e))

// 2. Forma 02 - Try...Catch...Finally

import axios from "axios";

async function fetchRepos() {
  try{
    const user = await axios.get("https://api.github.com/users/maykbrito");
    const repos = await axios.get(user.data.repos_url);
    console.log(repos.data);
  }catch(e){
    console.log(e)
  } finally{
    console.log('rodar sempre')
  }
}

fetchRepos();