import React from 'react'
import { FaRegTimesCircle, FaRegCheckCircle, FaPlane, FaPaperPlane } from 'react-icons/fa/index'

export default function DeliverCheckBtn(props) {

	return (
		<div className='mt-4 flex gap-2 pb-4'>
			<button
				type='button'
				className='btn bg-blue-blue btn-border-blue flex items-center gap-2 sm:text-sm'
			>
				Entregar Cheque
				<FaPaperPlane />
			</button>
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

