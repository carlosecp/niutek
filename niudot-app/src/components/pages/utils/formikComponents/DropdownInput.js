import React from 'react'
import {useField} from 'formik'

function DropdownInput({...props}) {
	const [field] = useField(props)

	return (
		<select {...field} {...props}>
			
		</select>
	)
}

export default DropdownInput
