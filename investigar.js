window.onload = function() {
	function obtenerRecetaPorIngrediente(listaDeComidas, ingrediente) {
		let comidaConEseIngrediente = []
		for (let i = 0; i < listaDeComidas.length; i++) {
			if (listaDeComidas[i].ingredientes.includes(ingrediente)) {
				comidaConEseIngrediente.push(listaDeComidas[i])
			}
		}
		return comidaConEseIngrediente
	}

	const listaDeComidas = [
		comida0 = {
			nombre: 'milanesa', 
			ingredientes: ['carne', 'sal', 'pan rallado']
		}, 
		comida1 = {
			nombre: 'pizza', 
			ingredientes: ['harina', 'levadura', 'sal']
		},
		comida2 = {
			nombre: 'omelette',
			ingredientes: ['huevo', 'jamon', 'queso', 'sal']
		},
		comida3 = {
			nombre: 'gnoquis', //no habia otra manera de escribirloo jajajaj
			ingredientes: ['harina', 'papa', 'tuco', 'sal']
		}
	]

	const listaDeIngredientes = [
		'huevo', //0
		'jamon', //1
		'papa', //2
		'harina', //3
		'levadura', //4
		'queso', //5
		'tuco' //6
		]

	function obtenerRecetaPorIngredientes (listaDeComidas, listaDeIngredientes) {
		let comidaConEsosIngredientes = []
		for (let i = 0; i < listaDeComidas.length; i++) {
			if (listaDeComidas[i].ingredientes.includes(listaDeIngredientes)) {
				comidaConEsosIngredientes.push(listaDeComidas[i])
		  }
		}
		return comidaConEsosIngredientes
	}

	console.log(obtenerRecetaPorIngredientes(listaDeComidas, listaDeIngredientes[0, 1, 5]))
	console.log(obtenerRecetaPorIngredientes(listaDeComidas, listaDeIngredientes[3, 2, 6]))

	
}