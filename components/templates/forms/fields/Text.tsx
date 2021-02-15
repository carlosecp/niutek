import { useField, useFormikContext } from 'formik'

interface TextProps {
	name: string
	classes?: {
		container: string
		input: string
	}
	label?: string
	placeholder?: string
	type?: string
	disabled?: boolean
	[x: string]: any
}

const defaultClasses = {
	container: 'fc-lg md:fc',
	input: 'form-input form-input-border disabled:disabled',
}

const Text = ({ name, classes = defaultClasses, ...props }: TextProps) => {
	const [field, meta, helpers] = useField({ name, ...props })
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
			<input
				className={classes.input}
				placeholder={props?.label || props?.placeholder}
				disabled={isSubmitting || props?.disabled}
				type={props?.type}
				{...field}
			/>
			{meta.error && meta.touched && <small>{meta.error}</small>}
		</div>
	)
}

export default Text
