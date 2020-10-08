import React, { useContext, useEffect } from 'react'
import { useField } from 'formik'
import alertContext from '../../../../context/alert/alertContext'

function TextInput({ type, placeholder, ...props }) {
	const [field, meta] = useField(props)
	const { setAlert } = useContext(alertContext)

	useEffect(() => {
		console.log(meta.touched)
	}, [meta])

	return (
		<>
			<input
				type={type}
				className='std-input rounded'
				placeholder={placeholder}
				{...field}
			/>
		</>
	)
}

export default TextInput
