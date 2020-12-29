// React and Router Stuff
import React from 'react'
// Other Components
import Table from '../../utils/tables'

const ProductsTable = ({ togglePopup }) => {
	const headers = [
		'Artículo',
		'Descripción',
		'Presentación',
		'Cantidad',
		'Costo',
		'Total'
	]
	const rows = [
		{
			Artículo: '29102',
			Descripción: 'Salchichas para Hot Dog',
			Presentación: 'UNIDAD',
			Cantidad: '1',
			Costo: '12.76',
			Total: '12.76'
        },
        {
			Artículo: '29102',
			Descripción: 'Salchichas para Hot Dog',
			Presentación: 'UNIDAD',
			Cantidad: '1',
			Costo: '12.76',
			Total: '12.76'
        },
        {
			Artículo: '29102',
			Descripción: 'Salchichas para Hot Dog',
			Presentación: 'UNIDAD',
			Cantidad: '1',
			Costo: '12.76',
			Total: '12.76'
        },
        {
			Artículo: '29102',
			Descripción: 'Salchichas para Hot Dog',
			Presentación: 'UNIDAD',
			Cantidad: '1',
			Costo: '12.76',
			Total: '12.76'
		},
	]

	return (
		<>
			<Table headers={headers} rows={rows} togglePopup={togglePopup} />
		</>
	)
}

export default ProductsTable
