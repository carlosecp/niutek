import React from 'react'
import { useField } from 'formik'

function CheckboxInput({ label, children, ...props }) {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='std-input rounded'>
			<input type='checkbox' {...field} />
			<div className='input-checkbox-content'>{label}</div>
		</div>
	)
}

export default CheckboxInput
