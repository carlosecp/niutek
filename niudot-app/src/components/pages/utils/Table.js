import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, {
	CSVExport
} from 'react-bootstrap-table2-toolkit'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.css'

const { ExportCSVButton } = CSVExport
const products = [
	{
		cheque: '20668',
		fecha: '24/05/20',
		destinatario: 'Carlos Arcia',
		moneda: 'Córdobas',
		monto: '10500'
    },
    {
		cheque: '20668',
		fecha: '24/05/20',
		destinatario: 'Juan Matus',
		moneda: 'Córdobas',
		monto: '10500'
    },
    {
		cheque: '20668',
		fecha: '24/05/20',
		destinatario: 'Luis Montenegro',
		moneda: 'Córdobas',
		monto: '10500'
    },
    {
		cheque: '20668',
		fecha: '24/05/20',
		destinatario: 'Eduardo Castillo',
		moneda: 'Córdobas',
		monto: '10500'
    },
    {
		cheque: '20668',
		fecha: '24/05/20',
		destinatario: 'Ben Awad',
		moneda: 'Córdobas',
		monto: '10500'
	}
]

const columns = [
	{
		dataField: 'cheque',
		text: 'No. Cheque'
	},
	{
		dataField: 'fecha',
		text: 'Fecha'
	},
	{
		dataField: 'destinatario',
		text: 'Páguese A:'
	},
	{
		dataField: 'moneda',
		text: 'Moneda'
	},
	{
		dataField: 'monto',
		text: 'Monto'
	}
]

export default function Table() {
	return (
		<ToolkitProvider
			bootstrap4
			keyField='id'
			data={products}
			columns={columns}
			search
		>
			{(props) => (
				<React.Fragment>
					<BootstrapTable {...props.baseProps} />
					<ExportCSVButton className='btn-primary' {...props.csvProps}>
						Descargar CSV
					</ExportCSVButton>
				</React.Fragment>
			)}
		</ToolkitProvider>
	)
}
