import React from 'react'

function SubmitBtn() {
	return (
		<div className='form'>
			<div className='form-container form-btn-container'>
				<div className='form-field-sm-nl'>
					<button type='submit' className='form-submit-btn rounded'>
						Guardar
					</button>
				</div>
				<div className='form-field-sm'>
					<button type='cancel' className='form-cancel-btn rounded'>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	)
}

export default SubmitBtn
