import React from 'react'
import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'

function FormTextInput({ classes, name, placeholder }) {
	return (
		<div className={`form-field-${classes}`}>
			<TextInput name={name} type='text' placeholder={placeholder} />
		</div>
	)
}

function FormCheckboxInput({ classes, name, label }) {
	return (
		<div className={`form-field-${classes}`}>
			<CheckboxInput name={name} label={label} />
		</div>
	)
}

export { FormTextInput, FormCheckboxInput }
