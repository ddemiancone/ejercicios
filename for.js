window.onload = function() {
	function imprimirNumeros(tope) {
		let numero = 1
		for (let i = 1; i <= tope; i++) {
			console.log(i)
		}
	}

	function imprimirOtrosNumeros(desde, hasta) {
		if (desde < hasta) {
			for (let i = desde; i <= hasta; i++) {
				console.log(i)
			}
		}
	}

	imprimirNumeros(7)
	console.log(' ')
	imprimirOtrosNumeros(5, 15)
}
		