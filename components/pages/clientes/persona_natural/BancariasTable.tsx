import { useCallback, useMemo } from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text, Select } from '../../../templates/forms/_fields'
import Table from '../../../templates/tables/Table'

interface Props<Schema> {
	name: string
	schema: Schema
	options: any[]
	handleAdd: (obj: Schema) => void
	handleRemove: (index: number) => void
	limit: number
}

const BancariasTable = <Values, Schema>({
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
			input: 'w-full p-2 text-sm outline-none',
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
				Header: 'Servicio Recibido',
				id: 'prc_persona_contacto',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_persona_contacto`}
						classes={styles}
						placeholder='Servicio Recibido'
					/>
				),
			},
			{
				Header: 'Fecha de Inición Relación',
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
				id: 'prc_telefono1',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_telefono`}
						classes={styles}
						placeholder='Teléfono'
					/>
				),
			},
			{
				Header: 'No. Cuenta',
				id: 'prc_telefono2',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_telefono`}
						classes={styles}
						placeholder='No. Cuenta'
					/>
				),
			},
			{
				Header: 'Moneda',
				id: 'prc_telefono3',
				Cell: ({ row: { index } }) => (
					<Select
						name='p_tipo_doc'
						classes={{
							container: 'w-36',
							input:
								'border-none w-full p-2 text-sm outline-none',
						}}
					>
						<option value={1}>Primera Opcion</option>
						<option value={2}>Segunda Opcion</option>
					</Select>
				),
			},
			{
				Header: 'Banco',
				id: 'prc_telefono4',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${name}[${index}].prc_telefono`}
						classes={styles}
					/>
				),
			},
			{
				Header: 'Eliminar',
				id: 'eliminar',
				Cell: ({ row: { index } }) => (
					<button
						type='button'
						className='text-indigo-500 font-medium outline-none pl-2 text-sm'
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
					Referencias Bancarias
				</h1>
				<button
					type='button'
					className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-default '
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

export default BancariasTable
