// React and Router Stuff
import React, { useEffect } from 'react'
// Extra libraries
import { useTable, usePagination } from 'react-table'
import { FaChevronLeft, FaChevronRight, FaEdit } from 'react-icons/fa'

const Table = ({
	columns,
	data,
	fetchData,
	pageCount: controlledPageCount,
	showEdit,
	togglePopup
}) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		nextPage,
		previousPage,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
			manualPagination: true,
			pageCount: controlledPageCount
		},
		usePagination
	)

	useEffect(() => {
		fetchData({ pageIndex, pageSize })
	}, [fetchData, pageIndex, pageSize])

	return (
		<>
			<div className='mx-4 overflow-x-auto sm:hide-scrollbar'>
				<table
					className='flex-1 mx-auto table-auto border-1 border-gray-500'
					{...getTableProps()}
				>
					<thead className='bg-blue-700 dark:bg-blue-500 text-white'>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										className='py-3 px-5 whitespace-nowrap'
										{...column.getHeaderProps()}
									>
										{column.render('Header')}
									</th>
								))}
								{showEdit && <th className='py-3 px-5'></th>}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => (
										<td
											{...cell.getCellProps()}
											className='py-3 px-5 whitespace-nowrap dark:text-gray-200'
										>
											{cell.render('Cell')}
										</td>
									))}
									{showEdit && (
										<td>
											<FaEdit
												className='text-blue-blue cursor-pointer'
												onClick={togglePopup}
											/>
										</td>
									)}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
			{(canPreviousPage || canNextPage) && (
				<div className='flex justify-center py-2 gap-2'>
					<p
						className={`flex gap-1 items-center px-3 py-2 ${
							canPreviousPage
								? 'text-blue-blue cursor-pointer'
								: 'text-gray-cstm-12'
						} hover:undeline font-bold select-none`}
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
					>
						<FaChevronLeft />
						Anterior
					</p>
					<p
						className={`flex gap-1 items-center px-3 py-2 ${
							canNextPage
								? 'text-blue-blue cursor-pointer'
								: 'text-gray-cstm-12'
						} hover:undeline font-bold select-none`}
						onClick={() => nextPage()}
					>
						Siguiente
						<FaChevronRight />
					</p>
				</div>
			)}
		</>
	)
}

Table.defaultProps = {
	showEdit: true
}

export default Table
