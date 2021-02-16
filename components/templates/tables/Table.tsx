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

	console.log(data)

	return (
		<div className='overflow-x-auto no-scrollbar'>
			<div className='my-2 align-middle inline-block min-w-full sm:px-1'>
				<div className='shadow overflow-hidden border-b border-gray-200 rounded-lg'>
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
							{rows.map((row) => {
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
	)
}

export default memo(Table)
