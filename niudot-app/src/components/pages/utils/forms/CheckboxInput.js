// React and Router Stuff
import React from 'react'
// Extra libraries
import { useField } from 'formik'

const CheckboxInput = ({ children, description, placeholder, ...props }) => {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='form-field w-full inline-flex min-w-full align-middle flex-wrap'>
			<input
				type='checkbox'
				className='mr-4'
				placeholder={placeholder}
				{...field}
			/>
			<div className=''>{description}</div>
		</div>
	)
}

export default CheckboxInput
