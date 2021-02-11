import React from 'react'
import { useField } from 'formik'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckboxInput from './CheckboxInput'

const Text = (props) => {
	const {
		size,
		name,
		label,
		placeholder = label,
		showLabel,
		type,
		newline,
		boldLabel,
		isTextArea,
		disabled,
		forLabel = false,
	} = props

	return (
		<div className={`form-container-${size} ${newline && 'force-newline'}`}>
			{showLabel && (
				<label
					className={`text-black-white ${boldLabel && 'font-bold'} ${
						forLabel && 'sm:hidden'
					}`}
					htmlFor={name}
				>
					{label}
				</label>
			)}
			{!isTextArea ? (
				<TextInput
					name={name}
					disabled={disabled}
					type={type}
					placeholder={placeholder}
					{...props}
				/>
			) : (
				<TextArea
					name={name}
					disabled={disabled}
					type={type}
					placeholder={placeholder}
					{...props}
				/>
			)}
		</div>
	)
}

Text.defaultProps = {
	showLabel: true,
	type: 'text',
	newline: false,
	boldLabel: true,
	isTextArea: false,
	disabled: false,
}

const Checkbox = ({ name, size, newline, showLabel = true, label }) => {
	return (
		<div
			className={`form-container-${size} ${showLabel && 'mt-6'} ${
				newline && 'force-newline'
			} cstm:mt-4`}
		>
			<CheckboxInput name={name} label={label} showLabel={showLabel} />
		</div>
	)
}

Checkbox.defaultProps = {
	newline: false,
}

const Dropdown = ({ size, label, newline, loading, ...props }) => {
	const [field, meta] = useField(props)

	return (
		<div className={`form-container-${size} ${newline && 'force-newline'}`}>
			<label className='font-bold text-black-white'>{label}</label>
			<select
				className={`form-field w-full ${
					meta.touched && meta.error && 'form-field-error'
				} ${loading && 'cursor-wait'}`}
				{...field}
				{...props}
				disabled={loading}
			>
				{props.children}
			</select>
			{meta.touched && meta.error && (
				<small className='font-bold text-red-500'>{meta.error}</small>
			)}
		</div>
	)
}

Dropdown.defaultProps = {
	newline: false,
	loading: false,
}

export { Text, Checkbox, Dropdown }
