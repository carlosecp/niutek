import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

function Accionista() {
	return (
		<form className='form-container form-retractile-form'>
			<div className='form-field-md'>
				<input
					type='text'
					className='std-input rounded'
					placeholder='Nombre del accionista'
				/>
			</div>
			<div className='form-field-md'>
				<input
					type='text'
					className='std-input rounded-l'
					placeholder='Tipo de Identificación'
				/>
				<div className='btn input-btn-transparent rounded-r'>
					<FaChevronDown />
				</div>
			</div>
			<div className='form-field-sm'>
				<input
					type='text'
					className='std-input rounded'
					placeholder='No. Identificación'
				/>
			</div>
			<div className='form-field-xs'>
				<input type='text' className='std-input rounded' placeholder='%' />
			</div>
		</form>
	)
}

export default Accionista
