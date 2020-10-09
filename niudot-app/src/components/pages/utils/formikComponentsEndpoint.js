import React from 'react'
import { useField } from 'formik'
import { FaChevronDown } from 'react-icons/fa'

import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'

function FormTextInput({ classes, name, label = 'Label', placeholder, type = 'text' }) {
	return (
		<div className={`form-field-${classes}`}>
			<label htmlFor={name}>{placeholder}</label>
			<TextInput name={name} type={type} placeholder={placeholder} />
		</div>
	)
}

function FormCheckboxInput({ classes, label, name }) {
	return (
		<div className={`form-field-${classes}`}>
			<label htmlFor={name}>{label}</label>
			<CheckboxInput name={name} label={label} />
		</div>
	)
}

function FormDropdownInput({ classes, label, ...props }) {
	const [field, meta] = useField(props)

	return (
		<div className={`form-field-${classes}`}>
			<label htmlFor=''>{label}</label>
			<div className='dropdown-container rounded'>
				<select {...field} {...props} />
				<span className='dropdown-icon'>
					<FaChevronDown />
				</span>
			</div>
			<span className='error'>{meta.touched && meta.error && meta.error}</span>
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput }
