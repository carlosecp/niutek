import React from 'react'
import { useField } from 'formik'
import { FaChevronDown } from 'react-icons/fa'

import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'

function FormTextInput({
	classes,
	name,
	label = 'Label',
	showLabel = true,
	placeholder,
	type = 'text',
	...props
}) {
	return (
		<div className={`form-field-${classes}`}>
			{showLabel && <label htmlFor={name}>{label}</label>}
			<TextInput name={name} type={type} placeholder={placeholder} {...props} />
		</div>
	)
}

function FormCheckboxInput({ classes, label, showLabel = true, name, title }) {
	return (
		<div className={`form-field-${classes}`}>
			{showLabel && <label htmlFor={name}>{label}</label>}
			<CheckboxInput name={name} label={label} title={title} />
		</div>
	)
}

function FormDropdownInput({ classes, label, ...props }) {
	const [field] = useField(props)

	return (
		<div className={`form-field-${classes}`}>
			<label htmlFor=''>{label}</label>
			<div className='dropdown-container rounded'>
				<select {...field} {...props} />
				<span className='dropdown-icon'>
					<FaChevronDown />
				</span>
			</div>
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput }
