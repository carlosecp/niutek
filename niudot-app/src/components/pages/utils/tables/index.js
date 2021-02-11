import React, { useState, useEffect } from 'react'
import { useTable, usePagination } from 'react-table'
import { FaChevronLeft, FaChevronRight, FaEdit } from 'react-icons/fa'
import spinner from '../../../../assets/images/spinner.png'

const Table = ({
	columns,
	data,
	fetchData,
	pageCount: controlledPageCount,
	showEdit,
	togglePopup,
	loading,
	fullRow = false,
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
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
			manualPagination: true,
			pageCount: controlledPageCount,
		},
		usePagination
	)

	const [loadingPos, setLoadingPos] = useState('right')

	useEffect(() => {
		fetchData({ pageIndex, pageSize })
	}, [fetchData, pageIndex, pageSize])

	if (loading) {
		return (
			<div className='w-full flex justify-center p-4 animate-spin'>
				<img src={spinner} alt='Loading...' className='w-12 h-12' />
			</div>
		)
	}

	return (
		<>
			<div className='overflow-x-auto sm:hide-scrollbar'>
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
							const rowId = fullRow
								? row.original
								: row.original.id
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
										<td className='py-3 px-5 whitespace-nowrap dark:text-gray-200'>
											<FaEdit
												className='text-blue-blue cursor-pointer'
												onClick={() => {
													togglePopup(rowId)
												}}
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
				<div className='flex justify-center items-center pt-2 gap-2'>
					<p
						className={`flex gap-1 items-center px-3 py-2 ${
							canPreviousPage || loading
								? 'text-blue-blue cursor-pointer'
								: 'text-gray-cstm-12 cursor-not-allowed'
						} hover:undeline font-bold select-none ${
							loading && 'cursor-wait'
						}`}
						onClick={() => {
							previousPage()
							setLoadingPos('left')
						}}
						disabled={!canPreviousPage}
					>
						{loading && loadingPos === 'left' ? (
							<img
								src={spinner}
								alt='Loading...'
								className='w-4 h-4 animate-spin'
							/>
						) : (
							<FaChevronLeft />
						)}
						Anterior
					</p>
					<p
						className={`flex gap-1 items-center px-3 py-2 ${
							canNextPage || loading
								? 'text-blue-blue cursor-pointer'
								: 'text-gray-cstm-12 cursor-not-allowed'
						} hover:undeline font-bold select-none ${
							loading && 'cursor-wait'
						}`}
						onClick={() => {
							nextPage()
							setLoadingPos('right')
						}}
					>
						Siguiente
						{loading && loadingPos === 'right' ? (
							<img
								src={spinner}
								alt='Loading...'
								className='w-4 h-4 animate-spin'
							/>
						) : (
							<FaChevronRight />
						)}
					</p>
				</div>
			)}
		</>
	)
}

export default Table
