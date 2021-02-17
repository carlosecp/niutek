import { memo } from 'react'
import { useTable } from 'react-table'

const Table = ({ columns, data }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	})

	return (
		<section className='my-3 rounded-lg shadow'>
			<div className='overflow-x-auto no-scrollbar'>
				<div className='align-middle inline-block min-w-full'>
					<div className='overflow-hidden border-b border-gray-200 rounded-t-lg'>
						<table
							{...getTableProps()}
							className='table-auto min-w-full divide-y divide-gray-200'
						>
							<thead className='bg-gray-50'>
								{headerGroups.map((headerGroup) => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map((column) => (
											<th
												{...column.getHeaderProps()}
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'
											>
												{column.render('Header')}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody
								{...getTableBodyProps()}
								className='bg-white divide-y divide-gray-200'
							>
								{rows.map((row) => {
									prepareRow(row)
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td
														{...cell.getCellProps()}
														className='pl-4 py-2'
													>
														{cell.render('Cell')}
													</td>
												)
											})}
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='px-4 py-3 bg-white rounded-b-lg'>
				{data.length === 0 ? (
					<div className='flex justify-center'>No hay resultados</div>
				) : (
					<div className='flex-1 flex justify-between'>
						<button
							type='button'
							className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
						>
							Anterior
						</button>
						<button
							type='button'
							className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
						>
							Siguiente
						</button>
					</div>
				)}
			</div>
		</section>
	)
}

export default memo(Table)
