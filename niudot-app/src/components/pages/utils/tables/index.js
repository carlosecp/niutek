// React and Router Stuff
import React from 'react'
import { FaEdit } from 'react-icons/fa'

const Table = ({ rows, headers, togglePopup }) => {
	return (
		<div className='overflow-x-scroll'>
			<table className='table-auto border-1 border-gray-500'>
				<thead className='bg-blue-700 text-white'>
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
									<td className='py-3 px-5 whitespace-nowrap'>{row[value]}</td>
								))}
								<td className='py-3 px-5 text-blue-700 font-bold hover:text-blue-500'>
									<FaEdit
										className='fill-current hover:underline cursor-pointer'
										onClick={togglePopup}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Table
