import React from 'react'

function Pendings() {
	return (
		<>
			<div className='bg-gray-200 dark:bg-gray-cstm-2'>
				<div className='max-w-3xl mx-auto p-8 text-black-white'>
					<h1 className='text-3xl font-bold'>Cuentas</h1>
					<p className='text-xl font-bold'>Por Pagar</p>
					<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
					<div className='my-2 mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1'>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
							Catálogo de proveedores
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
							Estado de cuenta por proveedor
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
							Administración de cotizaciones
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
							Generación y control de órdenes de compra
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
							Reporte de vencimiento de facturas por proveedor
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4'>
							Generación automática de asientos hacia la Contabilidad
						</div>
						<div className='p-2 rounded border-2 border-solid col-span-2 sm:col-span-1 text-black bg-white border-gray-300 dark:text-white dark:bg-gray-cstm-1 dark:border-gray-cstm-4 text-center sm:text-left'>
							Reporte antigüedad de saldos de facturasa por proveeder
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white-gray'>
				<div className='max-w-3xl mx-auto p-8 text-black-white'>
					<h1 className='text-3xl font-bold'>Cuentas</h1>
					<p className='text-xl font-bold'>Por Cobrar</p>
					<div className='rounded-full bg-blue-blue w-4/12 sm:w-full h-1 mt-4'></div>
					<div className='my-2 mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1'>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
							Consulta de estado de cuenta por proveedor
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
							Registro de nota de débito por cliente y factura
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
							Registra nota de crédito por cliente y factura
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
							Reporte de antigüedad de saldos por cliente
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
							Generación automática de asientos hacia la Contabilidad
						</div>
						<div className='p-2 rounded border-2 border-solid text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4'>
							Generación automática de asientos hacia la Contabilidad
						</div>
						<div className='p-2 rounded border-2 border-solid col-span-2 sm:col-span-1 text-black bg-white border-gray-200 dark:text-white dark:bg-gray-cstm-2 dark:border-gray-cstm-4 text-center sm:text-left'>
							Reporte antigüedad de saldos de facturasa por proveedor
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Pendings
