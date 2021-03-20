import type { TablaOptions } from '@/lib/interfaces'
import * as React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text, Select } from '@/components/forms'
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
	options: {
		tabla: TablaOptions
	}
	limit: number
	handleAdd: (obj: RefSchema) => void
	handleRemove: (index: number) => void
}

const GarantiasTable = <Values, RefSchema>(props: Props<RefSchema>) => {
	const { values } = useFormikContext<Values>()
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
				Header: 'Tipo garantía',
				id: props.tableKeys[0],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].${props.tableKeys[0]}`}
						classes={{
							container: 'w-36',
							input: 'border-none w-full p-2 text-sm outline-none'
						}}
					>
						<option value={1}>Primera Opcion</option>
						<option value={2}>Segunda Opcion</option>
					</Select>
				)
			},
			{
				Header: 'Descripción cargo',
				id: props.tableKeys[1],
				Cell: ({ row: { index } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[1]}`}
						classes={styles}
						placeholder='Descripción Cargo'
					/>
				)
			},
			{
				Header: 'Valor',
				id: props.tableKeys[2],
				Cell: ({ row: { index } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[2]}`}
						classes={styles}
						placeholder='Valor'
						type='number'
					/>
				)
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

export default GarantiasTable
