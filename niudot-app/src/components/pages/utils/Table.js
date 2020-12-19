import React from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'
import '../../../styles/tables.css'
import { FormDropdownInput } from './formikComponentsEndpoint'

const EditableCell = ({
	value: initialValue,
	row: { index },
	column: { id },
	updateMyData // This is a custom function that we supplied to our table instance
}) => {
	// We need to keep and update the state of the cell normally
	const [value, setValue] = React.useState(initialValue)

	const onChange = (e) => {
		setValue(e.target.value)
	}

	// We'll only update the external data when the input is blurred
	const onBlur = () => {
		updateMyData(index, id, value)
	}

	// If the initialValue is changed external, sync it up with our state
	React.useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	return (
		<input 
			readOnly 
			className={'text-black-white table-field'}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			style={{ textAlign: 'center' }}
		/>
	)
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
	Cell: EditableCell
}


function Table({ columns, data, updateMyData, skipPageReset }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		selectedFlatRows,
		state: {selectedRowIds}
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			// use the skipPageReset option to disable page resetting temporarily
			autoResetPage: !skipPageReset,
			// updateMyData isn't part of the API, but
			// anything we put into these options will
			// automatically be available on the instance.
			// That way we can call this function from our
			// cell renderer!
			updateMyData
		},
		usePagination,
		useRowSelect,
	)

	// Render the UI for your table
	return (
		<div className='styled-table'>
			<div className='tableWrap'>
				<table className='table table-field'  showPageJump={false} {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th className='text-black-white' {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										)
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table