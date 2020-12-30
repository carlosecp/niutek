// React and Router Stuff
import React from 'react'
import { FaEdit } from 'react-icons/fa'

const Table = ({ rows, headers, togglePopup }) => {
	return (
		<div className='overflow-x-scroll sm:hide-scrollbar'>
			<table className='mx-auto table-auto border-1 border-gray-500'>
				<thead className='bg-blue-700 dark:bg-blue-500 text-white'>
					{headers.map((header) => (
						<th className='py-3 px-5 whitespace-nowrap'>{header}</th>
					))}
					<th></th>
				</thead>
				<tbody>
					{rows.map((row) => {
						return (
							<tr>
								{Object.keys(row).map((value) => (
									<td className='py-3 px-5 whitespace-nowrap dark:text-gray-200'>
										{row[value]}
									</td>
								))}
								{togglePopup && (
									<td className='py-3 px-5 text-blue-700 dark:text-blue-500 font-bold hover:text-blue-500'>
										<FaEdit
											className='fill-current hover:underline cursor-pointer'
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
	)
}

export default Table
