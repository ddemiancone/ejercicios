window.onload = function() {

	miComidaPreferida = {
		nombre: 'Milanesa de pollo',
		cantidadDeVecesQueComi: 102,
		cantidadDeVecesQueMeCocinaron: 95,
		ingredientes: ['pechuga de pollo', 'pan rallado', 'huevos', 'condimentos'],
  }

	if (miComidaPreferida.ingredientes.length > 5) {
	 	miComidaPreferida.llevaMasDeCincoIngredientes = true
	}else miComidaPreferida.llevaMasDeCincoIngredientes =  false

	lasVecesQueCocineYo = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron
	miComidaPreferida.cantidadDeVecesQueMeCocine = lasVecesQueCocineYo 

	console.log(miComidaPreferida)
}


