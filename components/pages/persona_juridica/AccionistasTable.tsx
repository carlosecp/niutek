import type { TablaOptions } from '@/lib/interfaces'
import * as React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text } from '@/components/forms'
import Table from '@/components/tables/Table'

interface Props<RefSchema> {
	name: string
	refSchema: RefSchema
	options: {
		tabla: TablaOptions
	}
	limit: number
	handleAdd: (obj: RefSchema) => void
	handleRemove: (index: number) => void
}

const AccionistasTable = <Data, RefSchema>(props: Props<RefSchema>) => {
	const { values } = useFormikContext<Data>()
	const data: RefSchema[] = getIn(values, props.name) || []

	const onAdd = React.useCallback(() => {
		props.handleAdd(props.refSchema)
	}, [props.handleAdd])

	const onRemove = React.useCallback(
		(index) => {
			props.handleRemove(index)
		},
		[props.handleRemove]
	)

	const styles = React.useMemo(
		() => ({
			container: 'w-auto',
			input: 'w-full p-2 text-sm outline-none border-none'
		}),
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: 'Nombre accionista',
				id: 'pac_nombre_accionista',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].pac_nombre_accionista`}
						classes={styles}
						placeholder='Nombre accionista'
					/>
				)
			},
			{
				Header: 'Tipo documento',
				id: 'pac_tipo_doc',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].pac_tipo_doc`}
						classes={styles}
						placeholder='Tipo documento'
					/>
				)
			},
			{
				Header: 'Porcentaje',
				id: 'pac_porcentaje',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].pac_porcentaje`}
						classes={styles}
						placeholder='Porcentaje'
					/>
				)
			},
			{
				Header: 'Eliminar',
				id: 'eliminar',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<button
						type='button'
						className='text-primary font-medium outline-none pl-2 text-sm'
						onClick={() => onRemove(index)}
					>
						Eliminar
					</button>
				)
			}
		],
		[props.name, onRemove]
	)

	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='font-medium text-xl text-gray-900'>Proveedores</h1>
				<button
					type='button'
					className='btn btn-primary'
					onClick={onAdd}
					disabled={data.length >= props.limit}
				>
					Agregar
				</button>
			</div>
			<Table columns={columns} data={data} />
		</div>
	)
}

export default AccionistasTable
