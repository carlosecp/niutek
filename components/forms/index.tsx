import { useField, useFormikContext } from 'formik'

interface TextProps {
	name: string
	[x: string]: any
}

const Text = ({ name, ...props }: TextProps) => {
	const [field, meta, helpers] = useField({ name, ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className='w-full flex flex-col'>
			{props.showLabel && (
				<label htmlFor={name} className='font-medium'>
					{props.label}
				</label>
			)}
			<input
				className={`form-input ${
					isSubmitting && 'cursor-wait disabled'
				}`}
				placeholder={props.label}
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
