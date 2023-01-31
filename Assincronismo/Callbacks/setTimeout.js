// SetTimeout - setTimeout(function, delay)
// Assincronismo

// Exemplo01
setTimeout(function () {
	console.log('depois de 1s')
}, 1000)

// Exemplo 02
const timeOut = 3000
const finished = () => console.log('done!')
setTimeout(finished,timeOut) // A função será chamada de volta após 3s
console.log('Mostrar')