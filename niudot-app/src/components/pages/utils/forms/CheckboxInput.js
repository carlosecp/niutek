// React and Router Stuff
import React from 'react'
// Extra libraries
import { useField } from 'formik'

const CheckboxInput = ({ label, children, ...props }) => {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='form-field flex items-center'>
			<input type='checkbox' className='mr-2' {...field} {...props} />
			<div className=''>{description}</div>
		</div>
	)
}

export default CheckboxInput
