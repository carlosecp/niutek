import React from 'react'

import { Field } from 'formik'

const CheckboxInput = ({ name, showLabel, label }) => {
	return (
		<>
			{showLabel && (
				<label className='font-bold hidden sm:block'>{label}</label>
			)}
			<div className='form-field flex items-center self-end'>
				<Field type='checkbox' className='mr-2' name={name} />
				{label}
			</div>
		</>
	)
}

export default CheckboxInput
