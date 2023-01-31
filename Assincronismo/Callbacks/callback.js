// Funções aceitam qualquer tipo de dado como argumento

// Exemplo de Tipos de Entrada de Funções

function imprimirDado(dado) {
	console.log(dado)
}

imprimirDado(1) // number
imprimirDado('texto')  // string
imprimirDado(true)  // boolean
imprimirDado({ nome: 'João' })  // object
imprimirDado([1, 2, 3]) // array

// CallBack

function imprimirDado(dado) {
	console.log('outras tarefas')
	console.log(dado())
}

imprimirDado(function () {
	return 'Olá Mundo'
})