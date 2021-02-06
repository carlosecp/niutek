import React from 'react'
import { Field } from 'formik'

const Documents = () => {
	return (
		<div className='mt-4'>
			<label className='font-bold text-black-white' id='checkbox-group'>
				Documentos Requeridos
			</label>
			<div
				role='group'
				aria-labelledby='checkbox-group'
				className='form-grid-layout'
			>
				<div className='form-container-md'>
					<div className='form-field flex items-center gap-2'>
						<Field type='checkbox' name='pdc_cod_documento' value='1' />
						Documento 1
					</div>
				</div>
				<div className='form-container-md'>
					<div className='form-field flex items-center gap-2'>
						<Field type='checkbox' name='pdc_cod_documento' value='2' />
						Documento 2
					</div>
				</div>
				<div className='form-container-md '>
					<div className='form-field flex items-center gap-2'>
						<Field type='checkbox' name='pdc_cod_documento' value='3' />
						Documento 3
					</div>
				</div>
			</div>
		</div>
	)
}

export default Documents
