import React from 'react'
import { useFormikContext } from 'formik'
import { Text, Dropdown } from '../../utils/forms'
import { FaCheck, FaTrash } from 'react-icons/fa'
import Popup from '../../utils/tables/Popup'

const EditChargesPopup = ({ activeCharge, options, togglePopup }) => {
	const { cargos } = useFormikContext()

	return (
		<Popup togglePopup={togglePopup}>
			<h2 className='text-black-white text-xl font-bold'>Datos del Cargo</h2>
			<div className='form-grid-layout'>
				<Text name='pcr_descripcion_cargo' size='md' label='Cargo' />

				<Dropdown size='md' name='p_cod_moneda' label='Moneda'>
					{options.p_moneda.map((option) => (
						<option
							key={option.codigo}
							value={option.codigo}
							label={option.descripcion}
						/>
					))}
				</Dropdown>

				<Text name='pcr_valor' size='md' label='Valor' type='number' />

				<Dropdown size='md' name='pcr_cod_tipo' label='Tipo (%/Monto)'>
					{options.tipo_cargo.map((option) => (
						<option
							key={option.codigo}
							value={option.codigo}
							label={option.descripcion}
						/>
					))}
				</Dropdown>
			</div>
			<div className='mt-4 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Aceptar
					<FaCheck />
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Cancelar
					<FaTrash />
				</button>
			</div>
		</Popup>
	)
}

export default EditChargesPopup
