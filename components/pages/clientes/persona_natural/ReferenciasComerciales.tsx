import { useState, useMemo, useEffect, useCallback } from 'react'
import { Field, FieldArray, useFormikContext, getIn } from 'formik'
import { Text } from '../../../templates/forms/_fields'
import Table from '../../../templates/Table'
import { ValuesPersonaNatural } from '../../../../data/clientes/persona_natural/_data'

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
							limit={2}
						/>
					)}
				</FieldArray>
			</article>
		</section>
	)
}

const Referencias = ({ name, handleAdd, handleRemove, limit }) => {
	const { values } = useFormikContext<ValuesPersonaNatural>()

	const formikSlice = getIn(values, name) || []

	const onAdd = useCallback(() => {
		const newItem = {
			prc_nombre_entidad: '',
			prc_persona_contacto: '',
			prc_direccion: '',
			prc_annios_con_entidad: 0,
			prc_telefono: '',
		}

		handleAdd(newItem)
	}, [handleAdd])

	const onRemove = useCallback(
		(index) => {
			handleRemove(index)
		},
		[handleRemove]
	)

	const defaultInputStyles = useMemo(
		() => ({
			container: '',
			input: 'form-input',
		}),
		[]
	)

	const columns = useMemo(
		() => [
			{
				Header: 'Nombre Entidad',
				id: 'prc_nombre_entidad',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_nombre_entidad`}
						classes={defaultInputStyles}
					/>
				),
			},
			{
				Header: 'Persona de Contacto',
				id: 'prc_persona_contacto',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_persona_contacto`}
						classes={defaultInputStyles}
					/>
				),
			},
			{
				Header: 'Dirección',
				id: 'prc_direccion',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_direccion`}
						classes={defaultInputStyles}
					/>
				),
			},
			{
				Header: 'Años con entidad',
				id: 'prc_annios_con_entidad',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_annios_con_entidad`}
						classes={defaultInputStyles}
					/>
				),
			},
			{
				Header: 'Teléfono',
				id: 'prc_telefono',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_telefono`}
						classes={defaultInputStyles}
					/>
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
			<button
				type='button'
				onClick={onAdd}
				disabled={formikSlice.length >= limit}
			>
				Agregar
			</button>
			<Table data={formikSlice} columns={columns} />
		</div>
	)
}

export default ReferenciasComerciales
