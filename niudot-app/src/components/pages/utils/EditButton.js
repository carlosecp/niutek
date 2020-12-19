import React from 'react'
import { FaEdit } from 'react-icons/fa/index'

export default function EditButton(props) {
	return (
		<div className='flex gap-2'>
			<button
				type='button'
				className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
				{...props}
			>
				<FaEdit />
			</button>
		</div>
	)
}


