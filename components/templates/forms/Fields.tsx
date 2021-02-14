import { ReactNode, useEffect } from 'react'
import { useField, useFormikContext } from 'formik'

interface TextProps {
	name: string
	classes?: string
	label?: string
	placeholder?: string
	type?: string
	[x: string]: any
}

const Text = ({ name, ...props }: TextProps) => {
	const [field, meta, helpers] = useField({ name, ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div
			className={`flex flex-col ${props?.classes} ${
				props?.label || 'pt-6'
			}`}
		>
			{props?.label && (
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700'
				>
					{props?.label}
				</label>
			)}
			<input
				className={`form-input border border-gray-200 disabled:disabled ${
					isSubmitting && 'cursor-wait'
				}`}
				placeholder={props?.label || props?.placeholder}
				disabled={isSubmitting}
				type={props?.type}
				{...field}
			/>
			{meta.error && meta.touched && <small>{meta.error}</small>}
		</div>
	)
}

const TextArea = ({ name, ...props }: TextProps) => {
	const [field, meta, helpers] = useField({ name, ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div
			className={`flex flex-col ${props?.classes} ${
				props?.label || 'pt-6'
			}`}
		>
			{props?.label && (
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700'
				>
					{props?.label}
				</label>
			)}
			<textarea
				className={`form-input border border-gray-200 disabled:disabled ${
					isSubmitting && 'cursor-wait'
				}`}
				placeholder={props?.label || props?.placeholder}
				disabled={isSubmitting}
				rows={5}
				{...field}
			/>
			{meta.error && meta.touched && <small>{meta.error}</small>}
		</div>
	)
}

interface SelectProps {
	name: string
	children: ReactNode
	classes?: string
	label?: string
	placeholder?: string
	[x: string]: any
}

const Select = ({ name, children, ...props }: SelectProps) => {
	const [field, meta, helpers] = useField({ name, type: 'select', ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={`flex flex-col ${props?.classes}`}>
			{props?.label && (
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700'
				>
					{props?.label}
				</label>
			)}
			<select
				className={`form-input border border-gray-200 disabled:disabled${
					isSubmitting && 'cursor-wait'
				} `}
				disabled={isSubmitting}
				{...field}
				{...props}
			>
				{children}
			</select>
		</div>
	)
}

const Checkbox = () => {
	return <div></div>
}

export { Text, TextArea, Select, Checkbox }
