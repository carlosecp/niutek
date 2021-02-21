import { ReactNode } from 'react'
import { useField, useFormikContext } from 'formik'

interface Props {
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

const styles = {
	container: 'fc-lg md:fc',
	input: 'w-full block form-input form-input-border'
}

const Select = ({ name, classes = styles, children, ...props }: Props) => {
	const [field, meta, helpers] = useField({ name, type: 'select', ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={classes.container}>
			{props?.label && (
				<label htmlFor={name} className="text-sm font-medium text-gray-700">
					{props?.label}
				</label>
			)}
			<select
				className={`${classes.input} transition form-disabled ${
					meta.touched && meta.error ? 'border-error' : 'border-primary'
				}`}
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
