// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import { useField } from 'formik'
import ReactDatePicker from 'react-datepicker'

const DateInput = ({
	size,
	newLine,
	type,
	placeholder,
	boldLabel,
	label,
	...props
}) => {
	const [field, meta] = useField(props)
	const [startDate, setStartDate] = useState(new Date())

	return (
		<>
			<div
				className={`form-container-${size} ${
					newLine && 'force-newline'
				} flex flex-col mb-4`}
			>
				<label className={`text-black-white ${boldLabel && 'font-bold'}`}>
					{label}
				</label>

				<ReactDatePicker
					dateFormat='dd/MM/yyyy'
					className={`form-field w-full `}
					placeholderText='dd/mm/aaaa'
					{...field}
					{...props}
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
			</div>
		</>
	)
}

export default DateInput
