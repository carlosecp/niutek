import React from 'react'
import { FaRegTimesCircle, FaRegCheckCircle, FaUserEdit, FaEdit } from 'react-icons/fa/index'

export default function EditButton() {
	return (
		<div className='flex gap-2'>
			<button
				type='submit'
				className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
			>
				<FaEdit />
			</button>
		</div>
	)
}


