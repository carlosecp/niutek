import React, { useState } from 'react'
import { Table } from 'react-bootstrap-icons'

export default function RowElement() {
	const accionistas = [
		{
			nombre: 'Juan',
			tipo_identificacion: 'cedula',
			numero_identificacion: '042-010302-1002F',
			porcentaje: '30'
		},
		{
			nombre: 'Carlos',
			tipo_identificacion: 'cedula',
			numero_identificacion: '001-160901-3294T',
			porcentaje: '30'
		}
	]

	const TableData = (accionistas) => {
		return accionistas.map((accionista) => {
			const numero_identificacion = accionista.numero_identificacion
			const porcentaje = accionista.porcentaje
			const nombre = accionista.nombre
			const tipo_identificacion = accionista.tipo_identificacion

			return (
				<tr className='bg-white border-4 border-gray-200'>
					<td className='py-2 text-center'>
						<span className='ml-2 font-semibold'><input></input></span>
					</td>
					<td className='py-2 text-center'>
						<span className='ml-2 font-semibold'>
							{`${tipo_identificacion}`}
						</span>
					</td>
					<td className='py-2 text-center'>
						<span className='ml-2 font-semibold'>
							{`${numero_identificacion}`}
						</span>
					</td>
					<td className='py-2 text-center'>
						<span className='ml-2 font-semibold'>
							{`${porcentaje}`}
						</span>
					</td>
				</tr>
			)
		})
	}

	const showTableData = TableData(accionistas)

	return (
		<table className='w-200 table-auto'>
			<thead>
				<tr className='bg-gray-800 justify-between'>
					<th className='px-16 py-2'>
						<span className='text-gray-300'>Nombre</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-300'>Tipo Identificación</span>
					</th>
					<th className='px-16 py-2'>
						<span className='text-gray-300'>Número Identificación</span>
					</th>

					<th className='px-16 py-2'>
						<span className='text-gray-300'>Porcentaje</span>
					</th>
				</tr>
			</thead>
			<tbody>{showTableData}</tbody>
		</table>
	)
}
