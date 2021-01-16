import React from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa/index'
import spinner from '../../../assets/images/spinner-white.png'

const SubmitBtn = ({ loading }) => {
	return (
		<div className='mx-auto mt-4 flex justify-center gap-2'>
			<button
				type='submit'
				className={`btn bg-blue-blue btn-border-blue flex items-center gap-2 ${
					loading && 'cursor-wait'
				}`}
			>
				Guardar
				{loading ? (
					<img
						src={spinner}
						alt='Loading...'
						className='w-4 h-4 animate-spin'
						disabled={loading}
					/>
				) : (
					<FaCheck />
				)}
			</button>
			<button
				type='reset'
				className={`btn transition text-gray-cstm-10 dark:text-gray-cstm-8 bg-gray-cstm-15 flex items-center gap-2 focus:outline-none focus:ring focus:ring-gray-cstm-13 ${
					loading && 'cursor-not-allowed'
				}`}
				disabled={loading}
			>
				Cancelar
				<FaTimes />
			</button>
		</div>
	)
}

export default SubmitBtn
