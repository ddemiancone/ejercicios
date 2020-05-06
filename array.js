window.onload = function() {
	function duplicarNumeros(lista) {
		for (let i = 0; i < lista.length; i++) {
			numeroADuplicar = lista[i] * 2
			console.log(numeroADuplicar)
		}
	}

	const listaDeNumeros = [2, 4, 7, 9, 8] // 4, 8, 14, 18, 16
	duplicarNumeros(listaDeNumeros)

	function multiplicar(lista) {
		let numero = 1
		for (let i = 0; i < lista.length; i++) {
			numero = numero * lista[i]
		}
		return numero
	}

	const listaDeNumerosII = [2, 4, 6] // 48
	console.log(multiplicar(listaDeNumerosII))
}			
				