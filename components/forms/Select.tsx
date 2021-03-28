import { ReactNode } from 'react'
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
	children?: ReactNode
	[x: string]: any
}

const styles = {
	container: 'fc-lg md:fc',
	input: 'w-full block form-input form-input-border'
}

const Select = ({ name, classes = styles, children, ...props }: Props) => {
	const [field, meta] = useField({ name, type: 'select', ...props })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={classes.container}>
			{props?.label && (
				<label htmlFor={name} className='text-sm font-medium text-gray-700'>
					{props?.label}
				</label>
			)}
			<div className='relative'>
				<select
					className={`${classes.input} transition form-disabled ${
						meta.touched && meta.error ? 'border-error' : 'border-primary'
					}`}
					disabled={isSubmitting}
					{...field}
					{...props}
				>
					<option value={0} disabled>
						Seleccione
					</option>
					{children}
				</select>
				{meta.error && meta.touched && (
					<FaExclamationCircle className='absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-6 text-error fill-current' />
				)}
			</div>
			{meta.error && meta.touched && (
				<small className='text-error font-semibold'>{meta.error}</small>
			)}
		</div>
	)
}

export default Select
