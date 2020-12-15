import React from 'react'
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa/index'

function SubmitBtn() {
	return (
		<div className='py-4 flex gap-2'>
			<button
				type='submit'
				className='btn bg-blue-blue btn-border-blue flex items-center gap-2'
			>
				Guardar
				<FaRegCheckCircle />
			</button>
			<button
				type='cancel'
				className='text-white btn bg-gray-cstm-12 flex items-center gap-2 transition hover:bg-gray-cstm-10 focus:outline-none focus:ring focus:ring-gray-cstm-14 dark:bg-gray-cstm-2 dark:hover:bg-gray-cstm-4 dark:focus:ring-gray-cstm-5'
			>
				Cancelar
				<FaRegTimesCircle />
			</button>
		</div>
	)
}

export default SubmitBtn
