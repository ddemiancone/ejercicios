const COSTO_POR_HORA = 100 


const clientes = [
	{
		nombre: 'Sentey Rock',
		telefono: '1131931708',
		grabaciones: [
			{
				duracion: 2, // horas
				fecha: '07/05/2019'
			},
			{
				duracion: 2, // horas
				fecha: '09/06/2019'
			}
		],
		pagos: [
			{
				monto: 200
			},
			{
				monto: 150
			}
		]
	},
	{
		nombre: 'Los padrinos del todo',
		telefono: '1122334455',
		grabaciones: [
			{
				duracion: 1, // horas
				fecha: '19/12/2019'
			},
			{
				duracion: 4, // horas
				fecha: '25/02/2020'
			}
		],
		pagos: [
			{
				monto: 100 
			},
			{
				monto: 230
			},
			{
				monto: 90
			}
		]
	},
	{
		nombre: 'De Ruta 66',
		telefono: '1148486666',
		grabaciones: [
			{
				duracion: 6,
				fecha: '11/11/2018'
			},
			{
				duracion: 3,
				fecha: '25/10/2019'
			}
		],
		pagos: [
			{
				monto: 765
			}
		]
	},
	{
		nombre: 'Verederos',
		telefono: '1146985465',
		grabaciones: [
			{
				fecha: '15/10/2019',
				duracion: 5
			},
			{
				fecha: '12/11/2019',
				duracion: 3
			},
			{
				fecha: '02/01/2020',
				duracion: 4
			},
			{
				fecha: '05/02/2020',
				duracion: 2
			}
		],
		pagos: [
			{
				monto: 800
			},
			{
				monto: 600
			}
		]
	}
]


function obtenerDeudores(clientes) {
	deudores = []
	clientesEnRegla = []

	for(let i = 0; i < clientes.length; i++) { // recorremos la lista de clientes
			const cliente = clientes[i]
			
			let duracionTotalDelCliente = 0
	

		for(let j = 0; j < cliente.grabaciones.length; j++) { // recorremos grabaciones
			const grabacion = cliente.grabaciones[j]

			// la duracion total de grabaciones tiene que ser igual a la suma de todas las duraciones de grabaciones	

			duracionTotalDelCliente += grabacion.duracion
		}	

		const gastoTotalDelCliente = duracionTotalDelCliente * COSTO_POR_HORA 

		let pagoTotalDelCliente = 0

		for (let j = 0; j < cliente.pagos.length ; j++) { // recorremos pagos
			const pago = cliente.pagos[j]

			// el total gastado por cliente tiene que ser igual a la suma de TODOS los montos

			pagoTotalDelCliente += pago.monto 
		}


		const deudaDelCliente = gastoTotalDelCliente - pagoTotalDelCliente

		/* si la deuda es mayor a 0 que nos de nombre, telefono y monto a pagar y
			nos pushee el deudor a un objeto de deudores... y si no debe que lo
			pushee a un objeto de clientes en regla, con nombre y estado */

		if (deudaDelCliente > 0) { 
			deudores.push({
				nombre: cliente.nombre,
				telefono: cliente.telefono,
				monto_a_pagar: deudaDelCliente,
			})
		} else {
				clientesEnRegla.push({
					nombre: cliente.nombre,
					estado: 'Todo al dia'
				})
			}	
	}

	console.log(deudores)
	console.log(clientesEnRegla)

	return deudores
}

const misDeudores = obtenerDeudores(clientes)

/* LLevar registro contable del lugar, poder acceder rapidamente a la
cantidad de grabaciones hechas por ejemplo en febrero de 2020 */
 /* Para hacer esto deberiamos buscar cliente por cliente las
 fechas de las grabaciones y agruparlas para buscar en ellas, y
 seleccionar las que se llevaron a cabo en dicho mes. */


function listaDeFechas(listaDeClientes) {
	fechasEnLista = [] // declaro array vacio para despues llenarlo con las fechas

	for(let i = 0; i < clientes.length; i++) {
		const cliente = clientes[i]

		for(let j = 0; j < cliente.grabaciones.length; j++) {
			const grabacion = cliente.grabaciones[j]
			
			fechasEnLista.push(grabacion.fecha) // pusheo las fechas al array vacio
		}
	}

	return fechasEnLista
}

const misFechas = listaDeFechas(clientes)

/* si las fechas son mayores a 9 solo tiene que devolver mes/año
pero sino tiene que devolver 0mes/año */

function obtenerFechaABuscar(month, year) {
	if (month > 9) {
		return month + '/' + year
	} else return '0' + month + '/' + year
}

/* tendriamos que recorrer la fecha elegida, y si incluye los
mes y año que le vamos a dar a la anterior funcion que la
pushee a un array vacio, que sea devuelto a final de la funcion */

function obtenerFechasEn(date, month, year) {
	fechasEncontradas = []
	for(let i = 0; i < date.length; i++) {
		fecha = date[i]
		aBuscar = obtenerFechaABuscar(month, year)

		if (fecha.includes(aBuscar)) {
			fechasEncontradas.push(fecha)
		}
	}
	return fechasEncontradas
}

const fechasObtenidas = obtenerFechasEn(misFechas, 2, 2020)
console.log(fechasObtenidas)



