import { memo } from 'react'
import { useTable, usePagination } from 'react-table'
import Pagination from './Pagination'

interface Props {
	columns: {
		Header: string
		id: string
		Cell: ({ row: { index } }: { row: { index: any } }) => JSX.Element
	}[]
	data: any[]
}

const Table = ({ columns, data }: Props) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		canPreviousPage,
		canNextPage,
		nextPage,
		previousPage,
		prepareRow,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 }
		},
		usePagination
	)

	return (
		<section className='my-3 rounded-lg border'>
			<div className='overflow-x-auto'>
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
								{page.map((row) => {
									prepareRow(row)
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td {...cell.getCellProps()} className='pl-6 py-2'>
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
			<Pagination
				data={data}
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				previousPage={previousPage}
				nextPage={nextPage}
			/>
		</section>
	)
}

export default memo(Table)
