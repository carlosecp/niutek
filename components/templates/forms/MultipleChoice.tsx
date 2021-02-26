import * as React from 'react'

interface Props {
	title: string
	classes?: {
		container: string
	}
	children: React.ReactNode
}

const styles = {
	container: 'fc-lg'
}

const MultipleChoice = ({ title, classes = styles, children }: Props) => {
	return (
		<fieldset className={`${classes.container}`}>
			<label className='text-sm font-medium text-gray-700' id='checkbox-group'>
				{title}
			</label>
			<div role='group' aria-labelledby='checkbox-group' className='flex'>
				{children}
			</div>
		</fieldset>
	)
}

export default MultipleChoice
