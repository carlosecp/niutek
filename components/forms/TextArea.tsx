import { useField, useFormikContext } from 'formik'
import { FaExclamationCircle } from 'react-icons/fa'

interface Props {
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

const styles = {
	container: 'fc-lg',
	input: 'w-full block form-input form-input-border'
}

const TextArea = ({ name, classes = styles, ...props }: Props) => {
	const [field, meta, helpers] = useField({ name, ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={classes.container}>
			{props?.label && (
				<label htmlFor={name} className='text-sm font-medium text-gray-700'>
					{props?.label}
				</label>
			)}
			<div className='relative'>
				<textarea
					className={`${classes.input} transition form-disabled ${
						meta.touched && meta.error ? 'border-error' : 'border-primary'
					}`}
					placeholder={props?.placeholder || props?.label}
					disabled={isSubmitting}
					rows={5}
					{...field}
				/>
				{meta.error && meta.touched && (
					<FaExclamationCircle className='absolute right-2 top-1/2 transform -translate-y-1/2 text-error fill-current' />
				)}
			</div>
			{meta.error && meta.touched && (
				<small className='text-error font-semibold'>{meta.error}</small>
			)}
		</div>
	)
}

export default TextArea
