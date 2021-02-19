import { useCallback, useMemo } from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text } from '../../../templates/forms/_fields'
import Table from '../../../templates/tables/Table'

interface Props<Schema> {
	name: string
	schema: Schema
	handleAdd: (obj: Schema) => void
	handleRemove: (index: number) => void
	limit: number
}

const ComercialesTable = <Values, Schema>({
	name,
	schema,
	handleAdd,
	handleRemove,
	limit,
}: Props<Schema>) => {
	const { values } = useFormikContext<Values>()
	const data: Schema[] = getIn(values, name) || []

	const onAdd = useCallback(() => {
		handleAdd(schema)
	}, [handleAdd])

	const onRemove = useCallback(
		(index) => {
			handleRemove(index)
		},
		[handleRemove]
	)

	const styles = useMemo(
		() => ({
			container: 'w-auto',
			input: 'w-full p-2 pl-0 text-sm outline-none',
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
						classes={styles}
						placeholder='Nombre Entidad'
					/>
				),
			},
			{
				Header: 'Persona de Contacto',
				id: 'prc_persona_contacto',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_persona_contacto`}
						classes={styles}
						placeholder='Persona de Contacto'
					/>
				),
			},
			{
				Header: 'Dirección',
				id: 'prc_direccion',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_direccion`}
						classes={styles}
						placeholder='Dirección'
					/>
				),
			},
			{
				Header: 'Años con entidad',
				id: 'prc_annios_con_entidad',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_annios_con_entidad`}
						classes={styles}
						placeholder='Años con entidad'
					/>
				),
			},
			{
				Header: 'Teléfono',
				id: 'prc_telefono',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_telefono`}
						classes={styles}
						placeholder='Teléfono'
					/>
				),
			},
			{
				Header: 'Eliminar',
				id: 'eliminar',
				Cell: ({ row: { index } }) => (
					<button
						type='button'
						className='text-primary font-medium outline-none pl-2 text-sm'
						onClick={() => onRemove(index)}
					>
						Eliminar
					</button>
				),
			},
		],
		[name, onRemove]
	)

	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='font-medium text-xl text-gray-900'>
					Referencias Comerciales
				</h1>
				<button
					type='button'
					className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary btn-disabled transition'
					onClick={onAdd}
					disabled={data.length >= limit}
				>
					Agregar
				</button>
			</div>
			<Table columns={columns} data={data} />
		</div>
	)
}

export default ComercialesTable
