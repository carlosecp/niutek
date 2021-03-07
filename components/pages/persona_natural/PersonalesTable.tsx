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
				Header: 'Nombre',
				id: 'prp_nombre',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_nombre`}
						classes={styles}
						placeholder='Nombre'
					/>
				)
			},
			{
				Header: 'Tipo Documento',
				id: 'prp_tipo_doc',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_tipo_doc`}
						classes={styles}
						placeholder='Tipo Documento'
					/>
				)
			},
			{
				Header: 'No. Documento',
				id: 'prp_num_doc',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_num_doc`}
						classes={styles}
						placeholder='No. Documento'
					/>
				)
			},
			{
				Header: 'Teléfono 1',
				id: 'prp_telefono1',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_telefono1`}
						classes={styles}
						placeholder='Teléfono 1'
					/>
				)
			},
			{
				Header: 'Teléfono 2',
				id: 'prp_telefono2',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_telefono2`}
						classes={styles}
						placeholder='Teléfono 2'
					/>
				)
			},
			{
				Header: 'Dirección',
				id: 'prp_direccion',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_direccion`}
						classes={styles}
						placeholder='Dirección'
					/>
				)
			},
			{
				Header: 'Lugar Trabajo',
				id: 'prp_lugar_trabajo',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_lugar_trabajo`}
						classes={styles}
						placeholder='Lugar Trabajo'
					/>
				)
			},
			{
				Header: 'Teléfono Trabajo',
				id: 'prp_telefono_trabajo',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_telefono_trabajo`}
						classes={styles}
						placeholder='Teléfono Trabajo'
					/>
				)
			},
			{
				Header: 'Tiempo de Conocer',
				id: 'prp_tiempo_conocer',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_tiempo_conocer`}
						classes={styles}
						placeholder='Tiempo de Conocer'
						type='number'
						steps={1}
					/>
				)
			},
			{
				Header: 'Email',
				id: 'prp_e_mail',
				Cell: ({ row: { index } }: { row: { index: number } }) => (
					<Text
						name={`${props.name}[${index}].prp_e_mail`}
						classes={styles}
						placeholder='Email'
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
				<h1 className='font-medium text-xl text-gray-900'>
					Referencias Personales
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

export default PersonalesTable
