// Async/Await

// Versão sem Async/Await

let res = true;

const promessa = new Promise(function(resolve,reject) {
    if(res){
        return resolve('Ok!') 
    }
    return reject('Error!') 
})

promessa
.then(result => console.log(result)) // Então (then), quando a promessa tiver um resultado seja + ou -, ela mandará uma resposta.
.catch(erro => console.log(erro)) // Como é para capturar o erro, então usamos o "catch".
.finally(() => console.log('finalizada')) // Dando certo ou não o pedido foi feito.

// Versão com Async/Await

const promessa2 = new Promise(function (resolve, reject) {
    if(res){
        return resolve('Ok!') 
    }
    return reject('Error!') 
});

async function start() {
    try {
        const result = await promessa2; // vamos pegar o resultado da espera de uma promessa
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("rodar sempre");
    }
}

start();
