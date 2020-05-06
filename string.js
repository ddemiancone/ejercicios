window.onload = function() {
	function contarEspacios(txt) {
		let espacios = 0
		for (let i = 0; i < txt.length; i++) {
			if (txt[i] === ' ') {
				espacios++
			}
		}	
		return espacios
	}	

	console.log(contarEspacios('hola como remil andas')) //3 espacios

	function buscarTweets(tw, buscar) {
		let twObtenido = []
		for (let i = 0; i < tw.length; i++) {
			if (tw[i].includes(buscar)) {
				twObtenido.push(tw[i])
			}
		}
		return twObtenido
	}

	const tweets = [
		'maradona cancelado',
		'aguante los carpinchos',
		'arrancamos con el mundial de programacion',
		'vamos con los octavos del mundial de html'
	]


	console.log(buscarTweets(tweets, 'mundial'))

	function hacerAsteriscos(contenido) {
		let resultado = ''
		for (let i = 0; i < contenido.length; i++) {
			resultado = asterisco + '*'
		}
		return resultado
	}

	function censurarTexto(txt, censura) {
		let censurado = txt
		for (let i = 0; i < censura.length; i++) {
			const censura = censura[i]
			if (censurado.includes(censura)) {
				censurado = censurado.replace(censura, hacerAsteriscos(censura))
			}
		}
		return censurado
	}

	const insultosCensurados = ['boludo', 'concha']

	console.log(censurarTexto('la concha de tu madre all boys', insultosCensurados))
}
