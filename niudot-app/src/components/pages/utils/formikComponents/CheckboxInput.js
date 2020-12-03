import React from 'react'
import { useField } from 'formik'

function CheckboxInput({ children, description, ...props }) {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='form-field w-full flex justify-center items-center relative mt-auto'>
			<input type='checkbox' className='absolute left-2' {...field} />
			<div className=''>{description}</div>
		</div>
	)
}

export default CheckboxInput
