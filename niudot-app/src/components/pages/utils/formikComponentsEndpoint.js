import React, { useState } from 'react'
import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'
import { FaChevronDown } from 'react-icons/fa'

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

function FormDropdownInput({ classes, ...props }) {
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<div className={`form-field-${classes} dropdown`}>
			<div
				className={`std-input ${
					!showDropdown ? 'rounded-l' : 'dropdown-active-input'
				}`}
			></div>

			<div
				className={`btn input-btn-transparent ${
					!showDropdown ? 'rounded-r' : 'dropdown-active-btn'
				}`}
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<FaChevronDown />
			</div>

			{showDropdown && (
				<div className={`dropdown-content`}>
					<ul>{props.children}</ul>
				</div>
			)}
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput }
