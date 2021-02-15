import { ReactNode } from 'react'
import { useField, useFormikContext } from 'formik'

interface SelectProps {
	name: string
	classes?: {
		container: string
		input: string
	}
	label?: string
	placeholder?: string
	children: ReactNode
	[x: string]: any
}

const defaultClasses = {
	container: 'fc-lg md:fc',
	input: 'form-input form-input-border disabled:disabled',
}

const Select = ({
	name,
	classes = defaultClasses,
	children,
	...props
}: SelectProps) => {
	const [field, meta, helpers] = useField({ name, type: 'select', ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={classes.container}>
			{props?.label && (
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700'
				>
					{props?.label}
				</label>
			)}
			<select
				className={classes.input}
				disabled={isSubmitting}
				{...field}
				{...props}
			>
				{children}
			</select>
		</div>
	)
}

export default Select
