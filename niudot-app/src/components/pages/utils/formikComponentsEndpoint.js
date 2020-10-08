import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'
import DropdownInput from './formikComponents/DropdownInput'

function FormTextInput({ classes, name, placeholder, type = 'text' }) {
	return (
		<div className={`form-field-${classes}`}>
			<TextInput name={name} type={type} placeholder={placeholder} />
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

function FormDropdownInput({ classes, ...props }) {
	return (
		<div className={`form-field-${classes}`}>
			<div className='dropdown-container rounded'>
				<DropdownInput {...props} />
				<span className='dropdown-icon'>
					<FaChevronDown />
				</span>
			</div>
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput }
