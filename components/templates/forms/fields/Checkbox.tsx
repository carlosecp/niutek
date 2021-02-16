import classes from '*.module.css'
import { useField, useFormikContext } from 'formik'

interface CheckboxProps {
	name: string
	classes?: {
		container: string
		input: string
		checkbox: string
	}
	label: string
	disabled?: boolean
	[x: string]: any
}

const defaultClasses = {
	container: 'fc-lg md:fc-sm',
	input: 'h-input md:mt-6 flex form-input relative',
	checkbox:
		'mr-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
}

const Checkbox = ({
	name,
	classes = defaultClasses,
	label,
	...props
}: CheckboxProps) => {
	const [field, meta] = useField({ name, type: 'checkbox' })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={classes.container}>
			<div className={classes.input}>
				<input
					type='checkbox'
					className={classes.checkbox}
					disabled={isSubmitting || props?.disabled}
					{...field}
					{...props}
				/>
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700 relative bottom-1'
				>
					{label}
				</label>
			</div>
		</div>
	)
}

export default Checkbox
