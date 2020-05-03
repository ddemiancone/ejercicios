window.onload = function () {
	function calcularResultadoDeExamen(nota) {
		if (nota < 4) {
			resultado = 'aplazado'
		} else if (4 < nota < 6) {
			resultado = 'a recuperar'
		} else if (6 < nota < 10) {
			resultado = 'aprobado'
		} else if (nota = 10) {
			resultado = 'sobresaliente'
		}

		return resultado
	}
  
  function sonHermanos(talEste, talOtro) {
  	if (talEste.madre === talOtro.madre && talEste.padre === talOtro.padre) {
  		return 'Son hermanos'
  	}else return 'No son hermanos'
  }

  const roberto = {
  	madre: 'ermenegilda',
  	padre: 'godofredo'
  }

  const alberto = {
  	madre: 'ermenegilda',
  	padre: 'godofredo'
  }

  const juan = {
  	madre: 'jacinta',
  	padre: 'jaime'
  }

  function contarEspacios(texto) {
  	let espacios = 0

  	for (let i = 0; i < texto.length; i++) {
  		if (texto[i] === ' ') {
  			espacios = espacios + 1
  		}
  	}

  	return espacios
  }

  console.log(calcularResultadoDeExamen(5))
  console.log(calcularResultadoDeExamen(10))

  console.log(sonHermanos(roberto, juan))
  console.log(sonHermanos(roberto, alberto))


  console.log(contarEspacios('habia una vez truz'))
  console.log(contarEspacios('nohayespaciosjaja'))
}