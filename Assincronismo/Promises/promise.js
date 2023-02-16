/* Promise
- A promessa de que algo irá acontecer.
- Poderá dar certo ou errado, mas irá acontecer.
- É obrigatório passar uma função como parâmetro.
- Como é um objeto a sua sintaxe é: new Promise(certo,error)
*/

let aceitar = false; // controle de resposta

console.log('pedir uber')

const promessa = new Promise((resolve,reject) => {

    // Está no momento pending

    if(aceitar){
        return resolve('carro chegou!') // Quando temos apenas uma condicional torna-se opcional o "else"
    } 

    return reject('pedido negado!') // reject('pedido negado')
})

promessa
    .then(result => console.log(result)) // Então (then), quando a promessa tiver um resultado +, ela mandará uma resposta.
    .catch(erro => console.log(erro)) // Como é para capturar o erro, então usamos o "catch".
    .finally(() => console.log('finalizada')) // Dando certo ou não o pedido foi feito.

console.log('aguardando...')