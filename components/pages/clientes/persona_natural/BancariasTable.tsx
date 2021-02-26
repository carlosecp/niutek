import type { TablaOptions } from '../../../../interfaces'
import * as React from 'react'
import { useFormikContext, getIn } from 'formik'
import { Text, Select } from '../../../templates/forms'
import Table from '../../../templates/tables/Table'

interface Props<RefSchema> {
	name: string
	refSchema: RefSchema
	options: TablaOptions
	limit: number
	handleAdd: (obj: RefSchema) => void
	handleRemove: (index: number) => void
}

const BancariasTable = <Values, RefSchema>(props: Props<RefSchema>) => {
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
				Header: 'Nombre Entidad',
				id: 'prb_nombre_entidad',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prb_nombre_entidad`}
						classes={styles}
						placeholder='Nombre Entidad'
					/>
				)
			},
			{
				Header: 'Servicio Recibido',
				id: 'prb_tipo_servicio_recibido',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prb_tipo_servicio_recibido`}
						classes={styles}
						placeholder='Servicio Recibido'
					/>
				)
			},
			{
				Header: 'Fecha de Inición Relación',
				id: 'prb_fecha_inicio_relacion',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prb_fecha_inicio_relacion`}
						classes={styles}
						placeholder='YYYY-MM-DD'
					/>
				)
			},
			{
				Header: 'Años con entidad',
				id: 'prb_annios_con_entidad',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prb_annios_con_entidad`}
						classes={styles}
						placeholder='Años con entidad'
						type='number'
						steps={1}
					/>
				)
			},
			{
				Header: 'Teléfono',
				id: 'prb_telefono1',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prb_telefono`}
						classes={styles}
						placeholder='Teléfono'
					/>
				)
			},
			{
				Header: 'No. Cuenta',
				id: 'prb_telefono2',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prb_telefono`}
						classes={styles}
						placeholder='No. Cuenta'
					/>
				)
			},
			{
				Header: 'Moneda',
				id: 'pct_cod_moneda',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Select
						name={`${props.name}[${index}].pct_cod_moneda`}
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
				Header: 'Banco',
				id: 'pct_cod_banco',
				Cell: ({ row: { index } }) => (
					<Select
						name={`${props.name}[${index}].pct_cod_banco`}
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
				<h1 className='font-medium text-xl text-gray-900'>
					Referencias Bancarias
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

export default BancariasTable
