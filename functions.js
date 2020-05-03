window.onload = function() {
	function calcularAreaRectangulo(base, altura) {
		const area = base * altura

		return area
	}

	const rectangulo = calcularAreaRectangulo(6, 14)

	console.log('El area del rectangulo es ' + rectangulo)


  function calcularPrecioTotal(precio, cantidad, envio) {
  	const calcularTotal = precio * cantidad + envio

  	return calcularTotal
  }

  const total = calcularPrecioTotal(1800, 3, 350)

  console.log('El total a pagar es $' + total)

	function dejarPasar(edad) {
		if (edad >= 18) {
			return true
		}else return false 
	}
	const soyMayorDeEdad = dejarPasar(17)
	
	console.log(soyMayorDeEdad)	
}
