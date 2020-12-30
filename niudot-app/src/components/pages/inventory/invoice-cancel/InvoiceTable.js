// React and Router Stuff
import React from 'react'
// Other Components
import Table from '../../utils/tables'

const InvoiceTable = ({ togglePopup }) => {
	const headers = ['Id', 'Nombre abreviado', 'Precio', 'Cantidad','Total']
	const rows = [
		{
			Id: 69,
			'Nombre abreviado': 'Album 2010',
			Precio: 69.69,
			Cantidad: 1,
			Total: 69.69,
		},
		{
			Id: 128,
			'Nombre abreviado': 'Powerade Hydro',
			Precio: 69.69,
			Cantidad: 1,
			Total: 69.69,
		},
		{
			Id: 256,
			'Nombre abreviado': '7up botella',
			Precio: 69.69,
			Cantidad: 1,
			Total: 69.69,
		},
		{
			Id: 512,
			'Nombre abreviado': 'Chiclastic T',
			Precio: 69.69,
			Cantidad: 1,
			Total: 69.69,
		},
		{
			Id: "",
			'Nombre abreviado': "",
			Precio:"",
			Cantidad: "",
			Total: 278.76,
		},
	]

	return 	<Table headers={headers} rows={rows} />
}

export default InvoiceTable
