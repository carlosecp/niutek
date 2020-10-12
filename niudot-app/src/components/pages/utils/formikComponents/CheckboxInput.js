import React from 'react'
import { useField } from 'formik'

function CheckboxInput({ label, children, title, ...props }) {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='std-input rounded'>
			<input type='checkbox' {...field} />
			<div className='input-checkbox-content'>{title}</div>
		</div>
	)
}

export default CheckboxInput
