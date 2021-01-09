import React from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa/index'

const SubmitBtn = (props) => {
	return (
		<div className='mx-auto mt-4 flex justify-center gap-2'>
			<button
				type='button'
				className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
			>
				Guardar
				<FaCheck />
			</button>
			<button
				type='button'
				className='text-white btn bg-gray-cstm-12 flex items-center gap-2 transition hover:bg-gray-cstm-10 focus:outline-none focus:ring focus:ring-gray-cstm-14 dark:bg-gray-cstm-10 dark:hover:bg-gray-cstm-4 dark:focus:ring-gray-cstm-5'
				{...props}
			>
				Cancelar
				<FaTimes />
			</button>
		</div>
	)
}

export default SubmitBtn
