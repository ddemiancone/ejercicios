function calcularPromedios(numerosAPromediar) {
	let resultado = 0
	for (i = 0; i < numerosAPromediar.length; i++) {
		resultado = resultado + numerosAPromediar[i]
	}
	resultado = resultado / numerosAPromediar.length
	return resultado
}

console.log(calcularPromedios([2, 6, 9]))