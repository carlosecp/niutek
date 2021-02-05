import React, { useState } from "react"

import { useField } from "formik"
import ReactDatePicker from "react-datepicker"

const DateInput = ({
	size,
	newline,
	type,
	placeholder,
	boldLabel,
	label,
	...props
}) => {
	const [field] = useField(props)
	const [startDate, setStartDate] = useState(new Date())

	return (
		<>
			<div
				className={`form-container-${size} ${
					newline && "force-newline"
				} flex flex-col mb-4`}
			>
				<label
					className={`text-black-white ${boldLabel && "font-bold"}`}
				>
					{label}
				</label>

				<ReactDatePicker
					dateFormat="dd/MM/yyyy"
					className={`form-field w-full `}
					placeholderText="dd/mm/aaaa"
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
