import React from 'react'
import { useField, useFormikContext } from 'formik'
import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'
import TextArea from './formikComponents/TextArea'
import DatePicker from 'react-datepicker'

function FormTextInput({
	size,
	name,
	label = 'Label',
	showLabel = true,
	placeholder,
	type = 'text',
	newLine = false,
	boldLabel = false,
	...props
}) {
	return (
		<div className={`form-container-${size} ${newLine && 'force-newline'}`}>
			{showLabel && (
				<label
					className={`text-black-white ${boldLabel && 'font-bold'}`}
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<TextInput name={name} type={type} placeholder={placeholder} {...props} />
		</div>
	)
}

function FormTextArea({
	size,
	name,
	label = 'Label',
	showLabel = true,
	placeholder,
	type = 'text',
	newLine = false,
	boldLabel = false,
	...props
}) {
	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size}`}>
			{showLabel && (
				<label
					className={`text-black-white ${boldLabel && 'font-bold'}`}
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<TextArea name={name} type={type} placeholder={placeholder} {...props} />
		</div>
	)
}

function FormCheckboxInput({
	size,
	label = '',
	name,
	description,
	newLine = false
}) {
	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size} flex`}>
			<CheckboxInput name={name} label={label} description={description} />
		</div>
	)
}

function FormDropdownInput({
	name,
	value,
	handleChange,
	size,
	label,
	newLine = false,
	option,
	placeholder,
	boldLabel = false,
	...props
}) {
	const [field] = useField(props)

	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size}`}>
			<label
				className={`text-black-white ${boldLabel && 'font-bold'}`}
				htmlFor={name}
			>
				{label}
			</label>
			<select
				name={name}
				onChange={handleChange}
				value={value}
				className='form-field w-full'
				{...field}
				{...props}
			>
				<option value='' selected hidden>
					{placeholder}
				</option>
				{props.children}
			</select>
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput, FormTextArea }
