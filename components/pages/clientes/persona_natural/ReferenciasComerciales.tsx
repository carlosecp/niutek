import { useState, useMemo, useEffect, useCallback } from 'react'
import { FieldArray, useFormikContext, getIn } from 'formik'
import { Text } from '../../../templates/forms/_fields'
import Table from '../../../templates/Table'

const ReferenciasComerciales = () => {
	return (
		<section id='referencias_comerciales'>
			<h1 className='font-medium text-xl text-gray-900'>
				Referencias Comerciales
			</h1>
			<article className='flex flex-col'>
				<FieldArray name='referenciasComerciales'>
					{(arrayHelpers) => (
						<Referencias
							name='referenciasComerciales'
							handleAdd={arrayHelpers.push}
							handleRemove={arrayHelpers.remove}
						/>
					)}
				</FieldArray>
			</article>
		</section>
	)
}

const Referencias = ({ name, handleAdd, handleRemove }) => {
	const { values } = useFormikContext()

	const formikSlice = getIn(values, name) || []
	const [tableRows, setTableRows] = useState<typeof formikSlice>(formikSlice)

	useEffect(() => {
		setTableRows(formikSlice)
	}, [formikSlice])

	const onAdd = useCallback(
		(index) => {
			const newState = [...tableRows]

			newState.splice(index, 1)
			setTableRows(newState)
			handleRemove(index)
		},
		[handleRemove, tableRows]
	)

	const onRemove = useCallback(
		(index) => {
			const newState = [...tableRows]

			newState.splice(index, 1)
			setTableRows(newState)
			handleRemove(index)
		},
		[handleRemove, tableRows]
	)

	const columns = useMemo(
		() => [
			{
				Header: 'Nombre Entidad',
				id: 'prc_nombre_entidad',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_persona_contacto`}
						classes={{
							container: '',
							input: '',
						}}
					/>
				),
			},
			{
				Header: 'Persona de Contacto',
				id: 'prc_persona_contacto',
				Cell: ({ row: { index } }) => (
					<Text name={`${name}[${index}].prc_persona_contacto`} />
				),
			},
			{
				Header: 'Dirección',
				id: 'prc_direccion',
				Cell: ({ row: { index } }) => (
					<Text name={`${name}[${index}].prc_direccion`} />
				),
			},
			{
				Header: 'Años con entidad',
				id: 'prc_annios_con_entidad',
				Cell: ({ row: { index } }) => (
					<Text name={`${name}[${index}].prc_annios_con_entidad`} />
				),
			},
			{
				Header: 'Teléfono',
				id: 'prc_telefono',
				Cell: ({ row: { index } }) => (
					<Text name={`${name}[${index}].prc_telefono`} />
				),
			},
			{
				Header: 'Eliminar',
				id: 'eliminar',
				Cell: ({ row: { index } }) => (
					<button type='button' onClick={() => onRemove(index)}>
						Eliminar
					</button>
				),
			},
		],
		[name, onRemove]
	)

	return (
		<div>
			<button type='button' onClick={onAdd}>
				Agregar
			</button>
			<Table data={tableRows} columns={columns} rowKey='id' />
		</div>
	)
}

export default ReferenciasComerciales
