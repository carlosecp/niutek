import * as React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text } from '@/components/forms'
import Table from '@/components/tables/Table'

const styles = {
	container: 'w-auto',
	input: 'w-full p-2 pl-0 text-sm outline-none border-none'
}

interface Props<RefSchema> {
	name: string
	title: string
	tableKeys: string[]
	refSchema: RefSchema
	limit: number
	handleAdd: (obj: RefSchema) => void
	handleRemove: (index: number) => void
}

const ProveedoresTable = <Data, RefSchema>(props: Props<RefSchema>) => {
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

	const columns = React.useMemo(
		() => [
			{
				Header: 'Nombre proveedor',
				id: props.tableKeys[0],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[0]}`}
						classes={styles}
						placeholder='Nombre proveedor'
					/>
				)
			},
			{
				Header: 'Nombre contacto',
				id: props.tableKeys[1],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[1]}`}
						classes={styles}
						placeholder='Nombre contacto'
					/>
				)
			},
			{
				Header: 'Teléfono',
				id: props.tableKeys[2],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[2]}`}
						classes={styles}
						placeholder='Teléfono'
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
		<>
			<div className='flex justify-between items-center'>
				<h1 className='font-medium text-xl text-gray-900'>{props.title}</h1>
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
		</>
	)
}

export default ProveedoresTable
