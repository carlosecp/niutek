// React and Router Stuff
import React from 'react'
import PropTypes from 'prop-types'
// Extra libraries
import { useField } from 'formik'
// Other Components
import TextInput from './TextInput'
import TextArea from './TextArea'

const Text = (props) => {
	const {
		size,
		name,
		label,
		showLabel,
		placeholder,
		type,
		newline,
		boldLabel,
		isTextArea,
		disabled
	} = props

	return (
		<div className={`form-container-${size} ${newline && 'force-newline'}`}>
			{showLabel && (
				<label
					className={`text-black-white ${boldLabel && 'font-bold'}`}
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

Text.propTypes = {
	size: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	showLabel: PropTypes.bool,
	newline: PropTypes.bool,
	boldLabel: PropTypes.bool,
	isTextArea: PropTypes.bool,
	disabled: PropTypes.bool
}

Text.defaultProps = {
	label: 'Label',
	showLabel: true,
	type: 'text',
	newline: false,
	boldLabel: false,
	isTextArea: false,
	disabled: false
}

const Checkbox = ({ description, size, newline, ...props }) => {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		// Si alguin (Juan) se pregunta que porque las inputs estan mas cortas de los normal, es que quite un mt-6 de la clase, no sabia si lo estabamos ocupando, asi que lo quite para que no se viera feo en el admin, pero si si lo estabamos ocupando pues, simplemente agregamos una nueva prop que pregunte si queremos el margin top o no, Juan, hacelo vos si lo necesitas.
		<div className={`form-container-${size} ${newline && 'force-newline'}`}>
			<div className='form-field flex items-center'>
				<input type='checkbox' {...props} {...field} />
				<div className='mt-1 ml-2'>{description}</div>
			</div>
		</div>
	)
}

Checkbox.propTypes = {
	size: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	newline: PropTypes.bool
}

Checkbox.defaultProps = {
	newline: false
}

const Dropdown = ({ size, label, newline, ...props }) => {
	const [field] = useField(props)

	return (
		<div className={`form-container-${size} ${newline && 'force-newline'}`}>
			<label className='text-black-white'>{label}</label>
			<select className='form-field w-full' {...field} {...props}>
				{props.children}
			</select>
		</div>
	)
}

Dropdown.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.object.isRequired,
	size: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	newline: PropTypes.bool.isRequired
}

Dropdown.defaultProps = {
	newline: false
}

export { Text, Checkbox, Dropdown }
