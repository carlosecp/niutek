import React from 'react'
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa/index'

function CancelBtn(props) {

	return (
		<div className='mt-4 flex gap-2 pb-4 m-0'>
			<button
				type='button'
				className='text-white btn bg-gray-cstm-12 flex items-center gap-2 transition hover:bg-gray-cstm-10 focus:outline-none focus:ring focus:ring-gray-cstm-14 dark:bg-gray-cstm-2 dark:hover:bg-gray-cstm-4 dark:focus:ring-gray-cstm-5'
				{...props}
			>
				Cancelar
				<FaRegTimesCircle />
			</button>
		</div>
	)
}

export default CancelBtn
