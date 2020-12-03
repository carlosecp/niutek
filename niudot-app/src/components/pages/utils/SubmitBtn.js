import React from 'react'

function SubmitBtn() {
	return (
		<div className='flex gap-2 my-4'>
			<div className='w-36'>
				<button type='submit' className='btn-block bg-green-500 text-white'>
					Guardar
				</button>
			</div>
			<div className='w-36'>
				<button type='cancel' className='btn-block bg-red-500 text-white'>
					Cancelar
				</button>
			</div>
		</div>
	)
}

export default SubmitBtn
