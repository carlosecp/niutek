import { Field, useField, useFormikContext } from 'formik'

interface Props {
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

const styles = {
	container: 'fc-lg md:fc-sm',
	input: 'h-input md:mt-6 flex form-input relative',
	checkbox:
		'mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
}

const Checkbox = ({ name, classes = styles, label, ...props }: Props) => {
	const [field, meta] = useField({ name, type: 'checkbox' })
	const { isSubmitting } = useFormikContext()

	return (
		<div className={classes.container}>
			<div className={classes.input}>
				<Field
					type='checkbox'
					className={classes.checkbox}
					disabled={isSubmitting || props?.disabled}
					id={name}
					{...field}
					{...props}
				/>
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700 relative bottom-px'
				>
					{label}
				</label>
			</div>
		</div>
	)
}

export default Checkbox
