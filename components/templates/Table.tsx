import { useEffect, memo } from 'react'
import { useTable, usePagination } from 'react-table'

const Table = ({ columns, data, fetchData, loading }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		usePagination
	)

	console.log(data)

	return (
		<div className='my-2 rounded-lg shadow'>
			<div className='overflow-x-auto no-scrollbar'>
				<div className='align-middle inline-block min-w-full'>
					<div className='overflow-hidden border-b border-gray-200 rounded-t-lg'>
						<table
							{...getTableProps()}
							className='min-w-full divide-y divide-gray-200'
						>
							<thead className='bg-gray-50'>
								{headerGroups.map((headerGroup) => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map((column) => (
											<th
												{...column.getHeaderProps()}
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
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
								{page.map((row) => {
									prepareRow(row)
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td
														{...cell.getCellProps()}
														className='pl-4 py-2 whitespace-nowrap'
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
			<div className='bg-white rounded-b-lg px-4 py-3 flex items-center justify-between'>
				<div className='flex-1 flex justify-between'>
					<button
						type='button'
						className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
						onClick={() => previousPage()}
					>
						Anterior
					</button>
					<button
						type='button'
						className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
						onClick={() => nextPage()}
					>
						Siguiente
					</button>
				</div>
			</div>
		</div>
	)
}

export default memo(Table)
