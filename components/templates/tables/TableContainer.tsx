import { useCallback, useMemo } from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text } from '../forms/_fields'
import Table from './Table'

interface Props<Schema> {
	name: string
	schema: Schema
	handleAdd: (obj: Schema) => void
	handleRemove: (index: number) => void
	limit: number
}

const TableContainer = <Values, Schema>({
	name,
	schema,
	handleAdd,
	handleRemove,
	limit,
}: Props<Schema>) => {
	const { values } = useFormikContext<Values>()
	const formikSlice = getIn(values, name) || []

	const onAdd = useCallback(() => {
		handleAdd(schema)
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

export default TableContainer
