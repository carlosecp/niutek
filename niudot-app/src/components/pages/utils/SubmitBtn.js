import React from 'react'

function SubmitBtn() {
	return (
		<div className='flex gap-2'>
			<button type='submit' className='btn bg-blue-blue btn-border-blue'>
				Guardar
			</button>
			<button type='cancel' className='btn bg-gray-cstm-12 btn-border-gray'>
				Cancelar
			</button>
		</div>
	)
}

export default SubmitBtn
