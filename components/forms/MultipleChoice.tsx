import * as React from 'react'
import { Field, useFormikContext } from 'formik'

interface Props {
	fields: {
		name: string
		label: string
		value: string | number
	}[]
	title: string
	classes?: {
		container: string
	}
	disabled?: boolean
}

const styles = {
	container: 'fc-lg'
}

const MultipleChoice = ({ fields, title, classes = styles }: Props) => {
	const { isSubmitting } = useFormikContext()

	return (
		<fieldset className={`${classes.container}`}>
			<label className='text-sm font-medium text-gray-700' id='checkbox-group'>
				{title}
			</label>
			<div
				role='group'
				aria-labelledby='checkbox-group'
				className='flex flex-wrap'
			>
				{fields.map((field) => (
					<div className='h-input flex form-input relative'>
						<Field
							name={field.name}
							type='checkbox'
							value={`${field.value}`}
							className='mr-2 focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300 rounded'
							disabled={isSubmitting}
						/>
						<label
							htmlFor={field.name}
							className='text-sm font-medium text-gray-700 relative bottom-px'
						>
							{field.label}
						</label>
					</div>
				))}
			</div>
		</fieldset>
	)
}

export default MultipleChoice
