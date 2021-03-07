import * as React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Select, Text } from '@/components/forms'
import Table from '@/components/tables/Table'

interface Props<RefSchema> {
	name: string
	refSchema: RefSchema
	limit: number
	handleAdd: (obj: RefSchema) => void
	handleRemove: (index: number) => void
}

// RefSchema es el schema de cada una de las rows de la tabla, no el validationSchema.
const CargosTable = <Data, RefSchema>(props: Props<RefSchema>) => {
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
			input: 'w-full p-2 pl-0 text-sm outline-none border-none'
		}),
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: 'Cargos',
				id: 'pcr_tipo_cargo',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].pct_tipo_cargo`}
						classes={{
							container: 'w-36',
							input: 'border-none w-full p-2 text-sm outline-none'
						}}
					>
						<option value={1}>Gastos Legales</option>
						<option value={2}>Seguro</option>
						<option value={3}>Comision</option>
					</Select>
				)
			},
			{
				Header: 'Moneda',
				id: 'pcr_cod_moneda',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].pct_cod_moneda`}
						classes={{
							container: 'w-36',
							input: 'border-none w-full p-2 text-sm outline-none'
						}}
					>
						<option value={1}>Dolares</option>
						<option value={2}>Cordobas</option>
						<option value={3}>Colones</option>
					</Select>
				)
			},
			{
				Header: 'Valor',
				id: 'pcr_valor',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].valor`}
						classes={styles}
						placeholder=''
					/>
				)
			},
			{
				Header: 'Tipo',
				id: 'pcr_cod_tipo',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].pct_cod_moneda`}
						classes={{
							container: 'w-36',
							input: 'border-none w-full p-2 text-sm outline-none'
						}}
					>
						<option value={1}>Porcentaje</option>
						<option value={2}>Monto</option>
					</Select>
				)
			},
			{
				Header: 'Aplica',
				id: 'pcr_cod_aplica',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].tipo_aplica`}
						classes={{
							container: 'w-36',
							input: 'border-none w-full p-2 text-sm outline-none'
						}}
					>
						<option value={1}>Formalizacion</option>
						<option value={2}>Cuota</option>
					</Select>
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
				<h1 className='font-medium text-xl text-gray-900'>
					Referencias Comerciales
				</h1>
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

export default CargosTable
