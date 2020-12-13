import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import '../../../styles/tables.css'
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor'
// ...

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
		text: 'Fecha',
		formatter: (cell) => {
			let dateObj = cell
			if (typeof cell !== 'object') {
				dateObj = new Date(cell)
			}
			return `${('0' + dateObj.getUTCDate()).slice(-2)}/${(
				'0' +
				(dateObj.getUTCMonth() + 1)
			).slice(-2)}/${dateObj.getUTCFullYear()}`
		},
		editor: {
			type: Type.DATE
		}
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

const RemoteCellEdit = (props) => {
	
	const cellEdit = {
		mode: 'click',
		errorMessage: props.errorMessage,
		blurToSave: true 
	}

	return (
		<div>
		<BootstrapTable
			keyField='id'
			data={products}
			columns={columns}
			cellEdit={cellEditFactory(cellEdit)}
			remote={{ cellEdit: true }}
			onTableChange={props.onTableChange}
		/>
		</div>
	)
}


class Table extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		data: products,
		errorMessage: null
	  };
	}
  
	handleTableChange = (type, { data, cellEdit: { rowId, dataField, newValue } }) => {
	  setTimeout(() => {
		if (newValue === 'test' && dataField === 'name') {
		  this.setState(() => ({
			data,
			errorMessage: 'Oops, product name should not be test'
		  }));
		} else {
		  const result = data.map((row) => {
			if (row.id === rowId) {
			  const newRow = { ...row };
			  newRow[dataField] = newValue;
			  return newRow;
			}
			return row;
		  });
		  this.setState(() => ({
			data: result,
			errorMessage: null
		  }));
		}
	  }, 2000);
	}
  
	render() {
	  return (
		<RemoteCellEdit
		  data={ this.state.data }
		  errorMessage={ this.state.errorMessage }
		  onTableChange={ this.handleTableChange }
		/>
	  );
	}
  }




  export default Table