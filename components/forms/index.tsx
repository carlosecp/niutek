import { Field } from 'formik'

interface TextProps {
	label: string
	name: string
	newLine?: boolean
	[x: string]: any
}

const Text = ({ label, name, newLine = false }: TextProps) => {
	return (
		<div className='w-full flex flex-col'>
			<label htmlFor={name} className='font-medium'>
				{label}
			</label>
			<Field
				name={name}
				as={() => <input className='form-input' placeholder={label} />}
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
