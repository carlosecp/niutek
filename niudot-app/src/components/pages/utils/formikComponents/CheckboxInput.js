import React from 'react'
import { useField } from 'formik'

function CheckboxInput({ label, children, title, ...props }) {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='tw-ff'>
			<input type='tw-text-label' {...field} />
			<div className=''>{title}</div>
		</div>
	)
}

export default CheckboxInput
