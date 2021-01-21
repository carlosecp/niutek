import React from "react"
// Extral libraries
import { useField } from "formik"

const TextArea = ({ disabled, type, placeholder, ...props }) => {
	const [field, meta] = useField(props)

	return (
		<>
			{!disabled ? (
				<textarea
					type={type}
					className={`w-full form-field ${
						meta.touched && meta.error && "form-field-error"
					}`}
					placeholder={placeholder}
					style={{ height: "10rem" }}
					{...field}
					{...props}
				/>
			) : (
				<textarea
					type={type}
					className={`w-full form-field-disabled ${
						meta.touched && meta.error && "form-field-error"
					}`}
					placeholder={placeholder}
					style={{ height: "10rem" }}
					{...field}
					{...props}
					disabled
				/>
			)}
			{meta.touched && meta.error && (
				<small className="font-bold text-red-500">{meta.error}</small>
			)}
		</>
	)
}

export default TextArea
