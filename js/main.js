'use strict'
const cells = {}
const rows = 5
const colums = 10
const alphabet = Array.from('ABCDEFGHIJKLMÑOPQRSTUVWXYZ')
const container = $('#container')

/*
 * 1) Generar celdas por posicion
 * 1.1) Las filas son numericas y las columnas son alfabeticas
 * 2) Iterar un array con el tamaño de la matriz
 * 3) Se acomoda la matriz con css
 * 4) Se genera eventos en cada celda, por lo tanto cada celda debe ser un div
 */

//  Obtiene la celda precionada
function getEvent(idCell) {
	
}

// Imprime nuevos nodos mediante una iteración
function printCells() {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < colums; j++) {
			const letter = alphabet[j]
			append(
				container,
				`<div onClick='getEvent("${letter}${i}")' class='cell'>
					<div>
						${letter}${i}
					</div>
				</div>`
			)
		}
	}
}

printCells()
