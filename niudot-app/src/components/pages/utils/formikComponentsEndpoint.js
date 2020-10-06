import React, {useState} from 'react'
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

function FormDropdownInput({ classes, name, option }) {

	const [ showDropdown, setShowDropdown ] = useState(false);

	return (
		<div className={`form-field-${classes} dropdown`}>
			<div className={`std-input rounded-l ${showDropdown && "changeFormRadius"}`}>
					</div>
			<div className={`btn input-btn-transparent rounded-r ${showDropdown && "changeFormRadius"} `}onClick={()=>setShowDropdown(!showDropdown)}>
				<FaChevronDown />
			</div>
			{showDropdown && <div className={`dropdown-content ${showDropdown && "changeRadius"}`}>
					<ul>
						<li>Option 1</li>
						<li>Option 2</li>
						<li>Option 3</li>
						<li>Option 4</li>
					</ul>
				</div>}
		</div>
	)
}



export { FormTextInput, FormCheckboxInput, FormDropdownInput }
