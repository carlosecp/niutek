import type { TablaOptions } from '@/lib/interfaces'
import * as React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text, Select } from '@/components/forms'
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

	console.log(values)

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
				Header: 'Tipo garantía',
				id: 'prc_cod_moneda',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].prc_cod_tipo`}
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
				id: 'prc_descripcion_cargo',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${props.name}[${index}].prc_descripcion_cargo`}
						classes={styles}
						placeholder='Descripción Cargo'
					/>
				)
			},
			{
				Header: 'Valor',
				id: 'prc_valor',
				Cell: ({ row: { index } }) => (
					<Text
						name={`${props.name}[${index}].prc_valor`}
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
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='font-medium text-xl text-gray-900'>Garantias</h1>
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

export default GarantiasTable
