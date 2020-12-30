// React and Router Stuff
import React from 'react'
// Extra libraries
import { useField, Field } from 'formik'

const CheckboxInput = ({ description, placeholder, ...props }) => {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		<div className='form-field flex items-center'>
			<Field 
			className='mr-2'
			type='checkbox' name='withValue' value='noValue' 
			/>

			<div className=''>{description}</div>
		</div>
	)
}

export default CheckboxInput
