'use strict'
const cells = {}
const rows = 5
const colums = 10
const alphabet = Array.from('ABCDEFGHIJKLMÑOPQRSTUVWXYZ')
const container = $('#container')

//  Obtiene la celda precionada
function getEvent(idCell) {
	const idCellArray = Array.from(idCell)
	const columns = $(`.${idCellArray[0]}`)
	const rows = $(`.row${idCellArray[1]}`)
	disabledCells(columns)
	disabledCells(rows)
}

// Imprime nuevos nodos mediante una iteración
function printCells() {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < colums; j++) {
			const letter = alphabet[j]
			append(
				container,
				`<div onClick='getEvent("${letter}${i}")' class='cell ${letter} row${i}'>
					<div>
						${letter}${i}
					</div>
				</div>`
			)
		}
	}
}

// Deshabilita las celdas
function disabledCells(nodesArray) {
	nodesArray.forEach(node => {
		node.setAttribute('class', 'disabled')
	})
}

printCells()
