// React and Router Stuff
import React from 'react'
import PropTypes from 'prop-types'
// Extra libraries
import { useField } from 'formik'
// Other Components
import TextInput from './TextInput'
import CheckboxInput from './CheckboxInput'
import TextArea from './TextArea'

const Text = (props) => {
	const {
		size,
		name,
		label,
		showLabel,
		placeholder,
		type,
		newLine,
		boldLabel,
		isTextArea
	} = props

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
			{!isTextArea ? (
				<TextInput
					name={name}
					type={type}
					placeholder={placeholder}
					{...props}
				/>
			) : (
				<TextArea
					name={name}
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
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	showLabel: PropTypes.bool.isRequired,
	newLine: PropTypes.bool.isRequired,
	boldLabel: PropTypes.bool.isRequired,
	isTextArea: PropTypes.bool.isRequired
}

Text.defaultProps = {
	label: 'Label',
	showLabel: true,
	type: 'text',
	newLine: false,
	boldLabel: false,
	isTextArea: false
}

const Checkbox = ({ description, size, newLine, ...props }) => {
	const [field] = useField({ ...props, type: 'checkbox' })

	return (
		// Si alguin (Juan) se pregunta que porque las inputs estan mas cortas de los normal, es que quite un mt-6 de la clase, no sabia si lo estabamos ocupando, asi que lo quite para que no se viera feo en el admin, pero si si lo estabamos ocupando pues, simplemente agregamos una nueva prop que pregunte si queremos el margin top o no, Juan, hacelo vos si lo necesitas.
		<div className={`form-container-${size} ${newLine && 'force-newline'}`}>
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
	newLine: PropTypes.bool
}

Checkbox.defaultProps = {
	newLine: false
}

const Dropdown = ({ value, handleChange, size, label, newLine, ...props }) => {
	const [field] = useField(props)

	return (
		<div className={`form-container-${size} ${newLine && 'force-newline'}`}>
			<label className='text-black-white'>{label}</label>
			<div className=''>
				<select
					onChange={handleChange}
					value={value}
					className='form-field w-full'
					{...field}
					{...props}
				>
					{props.children}
				</select>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.object.isRequired,
	size: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	newLine: PropTypes.bool.isRequired
}

Dropdown.defaultProps = {
	newLine: false
}

export { Text, Checkbox, Dropdown }
