import { useField, useFormikContext } from 'formik'

interface TextProps {
	name: string
	label: string
	newLine?: boolean
	showLabel?: boolean
	[x: string]: any
}

const Text = ({
	name,
	label,
	newLine = false,
	showLabel = false,
	...props
}: TextProps) => {
	const [field, meta, helpers] = useField({ name, ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className='w-full flex flex-col'>
			{showLabel && (
				<label htmlFor={name} className='font-medium'>
					{label}
				</label>
			)}
			<input
				className='form-input text-center'
				placeholder={label}
				disabled={isSubmitting}
				{...field}
				{...props}
			/>
		</div>
	)
}

const TextArea = () => {
	return <div></div>
}

const Select = () => {
	return <div></div>
}

const Checkbox = () => {
	return <div></div>
}

export { Text, TextArea, Select, Checkbox }
