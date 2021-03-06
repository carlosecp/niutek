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

const PersonalesTable = <Data, RefSchema>(props: Props<RefSchema>) => {
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
				Header: 'Nombre entidad',
				id: props.tableKeys[0],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[0]}`}
						classes={styles}
						placeholder='Nombre entidad'
					/>
				)
			},
			{
				Header: 'Tipo documento',
				id: props.tableKeys[1],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].${props.tableKeys[1]}`}
						classes={{
							container: 'w-36',
							input: 'border-none w-full p-2 text-sm outline-none'
						}}
					>
						{props.options.tabla.tipo_doc.map((option) => (
							<option key={option.codigo} value={option.codigo}>
								{option.descripcion}
							</option>
						))}
					</Select>
				)
			},
			{
				Header: 'No. documento',
				id: props.tableKeys[2],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[2]}`}
						classes={styles}
						placeholder='No. documento'
					/>
				)
			},
			{
				Header: 'Tel??fono 1',
				id: props.tableKeys[3],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[3]}`}
						classes={styles}
						placeholder='Tel??fono 1'
					/>
				)
			},
			{
				Header: 'Tel??fono 2',
				id: props.tableKeys[4],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[4]}`}
						classes={styles}
						placeholder='Tel??fono 2'
					/>
				)
			},
			{
				Header: 'Direcci??n',
				id: props.tableKeys[5],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[5]}`}
						classes={{
							container: 'w-full',
							input: 'w-full px-2 pl-0 text-sm outline-none border-none'
						}}
						placeholder='Direcci??n'
					/>
				)
			},
			{
				Header: 'Lugar trabajo',
				id: props.tableKeys[6],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[6]}`}
						classes={styles}
						placeholder='Lugar trabajo'
					/>
				)
			},
			{
				Header: 'Tel??fono trabajo',
				id: props.tableKeys[7],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[7]}`}
						classes={styles}
						placeholder='Tel??fono trabajo'
					/>
				)
			},
			{
				Header: 'Tiempo de conocer',
				id: props.tableKeys[8],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[8]}`}
						classes={styles}
						placeholder='Tiempo de conocer'
						type='number'
						steps={1}
					/>
				)
			},
			{
				Header: 'Correo Electr??nico',
				id: props.tableKeys[9],
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].${props.tableKeys[9]}`}
						classes={{
							container: 'w-36',
							input: 'w-full p-2 pl-0 text-sm outline-none border-none'
						}}
						placeholder='Correo Electr??nico'
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

export default PersonalesTable
