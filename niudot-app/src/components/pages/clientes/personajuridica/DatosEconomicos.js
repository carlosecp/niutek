import React from 'react'
import RetractileForm from '../../utils/RetractileForm'

function DatosEconomicos() {
	return (
		<RetractileForm formTitle='Datos Económicos'>
			<form className='form form-container'>
				<div className='form-field-lg'>
					<input
						type='text'
						placeholder='Ingresos anuales aproximados'
						className='std-input rounded'
					/>
				</div>
			</form>
		</RetractileForm>
	)
}

export default DatosEconomicos
